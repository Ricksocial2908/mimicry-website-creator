import React, { useState } from 'react';
import { useEditable } from '../contexts/EditableContext';
import { Upload } from 'lucide-react';

interface EditableImageProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

const EditableImage = ({ id, src: defaultSrc, alt, className = '' }: EditableImageProps) => {
  const { isEditMode, content } = useEditable();
  const [src, setSrc] = useState(defaultSrc);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isEditMode) {
    return (
      <div className="relative group">
        <img src={content[id] || src} alt={alt} className={className} />
        <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <Upload className="w-8 h-8 text-white" />
        </label>
      </div>
    );
  }

  return <img src={content[id] || src} alt={alt} className={className} />;
};

export default EditableImage;