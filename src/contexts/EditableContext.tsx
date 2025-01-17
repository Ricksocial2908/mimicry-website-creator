import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface EditableContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (id: string, content: string) => void;
  content: Record<string, string>;
  getContent: (id: string) => string;
  saveChanges: () => void;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export const EditableProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});
  const { toast } = useToast();

  // Load saved content from localStorage on initial render
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const updateContent = (id: string, newContent: string) => {
    setContent((prev) => ({ ...prev, [id]: newContent }));
  };

  const getContent = (id: string) => {
    return content[id] || '';
  };

  const saveChanges = () => {
    localStorage.setItem('siteContent', JSON.stringify(content));
    toast({
      title: "Changes saved",
      description: "Your content has been saved successfully.",
    });
  };

  return (
    <EditableContext.Provider value={{ 
      isEditMode, 
      toggleEditMode, 
      updateContent, 
      content,
      getContent,
      saveChanges
    }}>
      {children}
    </EditableContext.Provider>
  );
};

export const useEditable = () => {
  const context = useContext(EditableContext);
  if (context === undefined) {
    throw new Error('useEditable must be used within an EditableProvider');
  }
  return context;
};