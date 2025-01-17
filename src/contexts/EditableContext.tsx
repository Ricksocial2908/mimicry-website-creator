import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditableContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (id: string, content: string) => void;
  content: Record<string, string>;
  getContent: (id: string) => string;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export const EditableProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const updateContent = (id: string, newContent: string) => {
    setContent((prev) => ({ ...prev, [id]: newContent }));
  };

  const getContent = (id: string) => {
    return content[id] || '';
  };

  return (
    <EditableContext.Provider value={{ 
      isEditMode, 
      toggleEditMode, 
      updateContent, 
      content,
      getContent 
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