export interface ContentData {
  [key: string]: string;
}

export interface SectionContent {
  id: string;
  defaultText: string;
}

export type ContentContextType = {
  content: ContentData;
  updateContent: (id: string, text: string) => void;
  isEditing: boolean;
  toggleEditing: () => void;
  resetToDefaults: () => void;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

// Represents the structure of our initial content loader
export interface InitialContent {
  [key: string]: string;
}