import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

interface EditableContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateContent: (id: string, content: string) => void;
  content: Record<string, string>;
  getContent: (id: string) => string;
  saveChanges: () => void;
  videoId: string;
  setVideoId: (id: string) => void;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export const EditableProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});
  const [videoId, setVideoId] = useState("jfKfPfyJRdk");
  const { toast } = useToast();

  // Load content from Supabase on initial render
  useEffect(() => {
    const loadContent = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content, video_id')
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error('Error loading content:', error);
          return;
        }

        // If we have data, use it. Otherwise, keep the default state
        if (data) {
          setContent(data.content as Record<string, string>);
          if (data.video_id) {
            setVideoId(data.video_id);
          }
        }
      } catch (error) {
        console.error('Error loading content:', error);
        toast({
          title: "Error loading content",
          description: "There was a problem loading your content. Using default content.",
          variant: "destructive"
        });
      }
    };

    loadContent();
  }, [toast]);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const updateContent = (id: string, newContent: string) => {
    setContent((prev) => ({ ...prev, [id]: newContent }));
  };

  const getContent = (id: string) => {
    return content[id] || '';
  };

  const saveChanges = async () => {
    try {
      // First, check if there's any existing content
      const { data: existingData } = await supabase
        .from('site_content')
        .select('id')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      let result;
      
      if (existingData) {
        // Update existing record
        result = await supabase
          .from('site_content')
          .update({
            content,
            video_id: videoId,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingData.id);
      } else {
        // Insert new record
        result = await supabase
          .from('site_content')
          .insert({
            content,
            video_id: videoId,
            updated_at: new Date().toISOString()
          });
      }

      if (result.error) {
        throw result.error;
      }

      toast({
        title: "Changes saved",
        description: "Your content has been saved successfully.",
      });
    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: "Error saving changes",
        description: "There was a problem saving your content. Please try again.",
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
      saveChanges,
      videoId,
      setVideoId
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