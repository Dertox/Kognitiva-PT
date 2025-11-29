import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../contexts/ContentContext';
import { Pencil } from 'lucide-react';

interface EditableProps {
  id: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
}

export const Editable: React.FC<EditableProps> = ({ id, as = 'p', className = '', multiline = false }) => {
  const { content, updateContent, isEditing } = useContent();
  const [localValue, setLocalValue] = useState(content[id] || '');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setLocalValue(content[id] || '');
  }, [content, id]);

  // Auto-resize textarea
  useEffect(() => {
    if (isEditing && multiline && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [localValue, isEditing, multiline]);

  const handleBlur = () => {
    setIsFocused(false);
    updateContent(id, localValue);
  };

  const Tag = as as any;

  if (isEditing) {
    return (
      <div className={`relative group ${className} ${multiline ? 'block' : 'inline-block w-full'}`}>
        {multiline ? (
          <textarea
            ref={textareaRef}
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            onBlur={handleBlur}
            onFocus={() => setIsFocused(true)}
            className={`w-full bg-fall-cream border-2 border-fall-moss/30 rounded-lg p-3 outline-none focus:border-fall-moss focus:ring-2 focus:ring-fall-moss/20 transition-all resize-none overflow-hidden font-mono text-sm text-stone-700 ${className}`}
            style={{ minHeight: '100px' }}
          />
        ) : (
          <input
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            onBlur={handleBlur}
            onFocus={() => setIsFocused(true)}
            className={`w-full bg-fall-cream border-b-2 border-fall-moss/30 outline-none focus:border-fall-moss px-1 font-mono text-sm text-stone-700 ${className}`}
          />
        )}
        {!isFocused && (
          <div className="absolute -top-3 -right-3 bg-fall-moss text-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
            <Pencil size={12} />
          </div>
        )}
      </div>
    );
  }

  // Render processed text (handles newlines for multiline text)
  if (multiline) {
      return (
        <Tag className={className}>
            {localValue.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    {i < localValue.split('\n').length - 1 && <br />}
                </React.Fragment>
            ))}
        </Tag>
      )
  }

  return <Tag className={className}>{localValue}</Tag>;
};