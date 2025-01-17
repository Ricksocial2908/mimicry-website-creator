import React, { useState, useRef, useEffect } from 'react';
import { useEditable } from '@/contexts/EditableContext';

interface EditableTextProps {
  id: string;
  defaultContent: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultContent,
  className = '',
  as: Component = 'div'
}) => {
  const { isEditMode, updateContent, getContent } = useEditable();
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const savedContent = getContent(id) || defaultContent;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = savedContent;
    }
  }, [savedContent]);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (isEditMode) {
      const newContent = e.currentTarget.innerHTML;
      updateContent(id, newContent);
      setIsEditing(false);
    }
  };

  const handleClick = () => {
    if (isEditMode) {
      setIsEditing(true);
    }
  };

  return (
    <Component
      ref={contentRef}
      className={`${className} ${isEditMode ? 'cursor-text hover:bg-white/5' : ''}`}
      contentEditable={isEditMode}
      onBlur={handleBlur}
      onClick={handleClick}
      suppressContentEditableWarning={true}
    />
  );
};

export default EditableText;