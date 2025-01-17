import React, { useState, useEffect } from 'react';
import { useEditable } from '../contexts/EditableContext';

interface EditableTextProps {
  id: string;
  defaultContent: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const EditableText = ({ id, defaultContent, className = '', as: Component = 'div' }: EditableTextProps) => {
  const { isEditMode, updateContent, content } = useEditable();
  const [editableContent, setEditableContent] = useState(defaultContent);

  useEffect(() => {
    if (content[id]) {
      setEditableContent(content[id]);
    }
  }, [content, id]);

  const handleBlur = () => {
    updateContent(id, editableContent);
  };

  if (isEditMode) {
    return (
      <div className="relative group">
        <Component
          className={`${className} outline-none border border-transparent focus:border-primary rounded px-2`}
          contentEditable
          onBlur={handleBlur}
          onInput={(e: React.FormEvent<HTMLDivElement>) => 
            setEditableContent(e.currentTarget.textContent || '')
          }
          dangerouslySetInnerHTML={{ __html: editableContent }}
        />
        <div className="absolute -top-2 -right-2 bg-primary text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Edit
        </div>
      </div>
    );
  }

  return <Component className={className}>{editableContent}</Component>;
};

export default EditableText;