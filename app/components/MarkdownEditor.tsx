import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  useEffect(() => {
    // Load CSS on client side only
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/easymde/dist/easymde.min.css';
      link.id = 'easymde-css';
      
      // Only add if not already added
      if (!document.getElementById('easymde-css')) {
        document.head.appendChild(link);
      }
    }
  }, []);

  return <SimpleMDE value={value} onChange={onChange} />;
};

export default MarkdownEditor;
