import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabase';

interface EditableContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (id: string, content: string) => void;
  content: Record<string, string>;
  getContent: (id: string) => string;
  saveChanges: () => Promise<void>;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export const EditableProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});
  const { toast } = useToast();

  // Load content from Supabase on initial render
  useEffect(() => {
    const loadContent = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content_id, content');
        
        if (error) throw error;

        const contentMap: Record<string, string> = {};
        data?.forEach(item => {
          contentMap[item.content_id] = item.content;
        });
        setContent(contentMap);
      } catch (error) {
        console.error('Error loading content:', error);
        toast({
          title: "Error loading content",
          description: "There was a problem loading the site content.",
          variant: "destructive"
        });
      }
    };

    loadContent();
  }, []);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const updateContent = (id: string, newContent: string) => {
    setContent((prev) => ({ ...prev, [id]: newContent }));
  };

  const getContent = (id: string) => {
    return content[id] || '';
  };

  const saveChanges = async () => {
    try {
      // Convert content object to array of upsert operations
      const upsertData = Object.entries(content).map(([content_id, content]) => ({
        content_id,
        content
      }));

      const { error } = await supabase
        .from('site_content')
        .upsert(upsertData, { 
          onConflict: 'content_id',
          ignoreDuplicates: false 
        });

      if (error) throw error;

      toast({
        title: "Changes saved",
        description: "Your content has been saved successfully.",
      });
    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: "Error saving changes",
        description: "There was a problem saving your changes.",
        variant: "destructive"
      });
    }
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