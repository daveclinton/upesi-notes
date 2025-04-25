"use client";

import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@syfxlin/tiptap-starter-kit";

interface TipTapEditorProps {
  isEditable: boolean;
}

const TipTapEditorClient: React.FC<TipTapEditorProps> = ({ isEditable }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Start Writing...",
            },
          ],
        },
      ],
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
    <article className={`editor-container prose dark:prose-invert`}>
      <EditorContent editor={editor} />
    </article>
  );
};

export default TipTapEditorClient;
