import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ContentContextType, ContentData } from '../types';
import { initialContent } from '../utils/initialContent';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentData>(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('kognitiva_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        // Merge with initialContent to ensure new keys exist if schema changes
        setContent({ ...initialContent, ...parsed });
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  const updateContent = (id: string, text: string) => {
    const newContent = { ...content, [id]: text };
    setContent(newContent);
    localStorage.setItem('kognitiva_content', JSON.stringify(newContent));
  };

  const toggleEditing = () => {
    setIsEditing(prev => !prev);
  };

  const resetToDefaults = () => {
    if (window.confirm("Är du säker på att du vill återställa allt innehåll till ursprungsläget?")) {
      setContent(initialContent);
      localStorage.removeItem('kognitiva_content');
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isEditing, toggleEditing, resetToDefaults }}>
      {children}
    </ContentContext.Provider>
  );
};