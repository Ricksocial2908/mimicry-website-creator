import React, { useRef, useEffect } from 'react';
import { useEditable } from '@/contexts/EditableContext';

interface EditableTextProps {
  id: string;
  defaultContent: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const EditableText = ({
  id,
  defaultContent,
  className = '',
  as: Component = 'div'
}: EditableTextProps) => {
  const { isEditMode, updateContent, getContent } = useEditable();
  const contentRef = useRef<HTMLDivElement>(null);
  const savedContent = getContent(id) || defaultContent;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = savedContent;
    }
  }, [savedContent]);

  const handleBlur = () => {
    if (isEditMode && contentRef.current) {
      const newContent = contentRef.current.innerHTML;
      updateContent(id, newContent);
    }
  };

  return React.createElement(
    Component,
    {
      ref: contentRef,
      className: `${className} ${isEditMode ? 'cursor-text hover:bg-white/5' : ''}`,
      contentEditable: isEditMode,
      onBlur: handleBlur,
      suppressContentEditableWarning: true,
      dangerouslySetInnerHTML: { __html: savedContent }
    }
  );
};

export default EditableText;