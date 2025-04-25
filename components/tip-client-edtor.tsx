"use client";

import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@syfxlin/tiptap-starter-kit";
import { editorContent } from "@/lib/content";

interface TipTapEditorProps {
  isEditable: boolean;
}

const TipTapEditorClient: React.FC<TipTapEditorProps> = ({ isEditable }) => {
  // Initialize editor with proper configuration
  const editor = useEditor({
    extensions: [StarterKit],
    content: {
      type: "doc",
      content: editorContent,
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[200px]",
      },
    },
    editable: isEditable,
  });

  // Update editor editable state when isEditable changes
  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  // Cleanup editor on unmount
  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={`editor-container ${!isEditable ? "opacity-70" : ""}`}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditorClient;
