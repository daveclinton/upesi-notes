"use client";
import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import ControlledEditableContent from "./ControlledEditableContent";

const MainEditor = () => {
  const [content, setContent] = useState<string>("Title...");
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<h1>Hello World</h1><p>This is a simple Tiptap editor.</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[200px]",
      },
    },
  });
  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <ControlledEditableContent
        value={content}
        onChange={setContent}
        placeholder="Add your content here..."
        className="text-3xl text-muted-foreground mb-6 outline-none"
      />
      <div
        contentEditable
        className="text-xl text-muted-foreground mb-6 outline-none"
      ></div>
      <EditorContent editor={editor} />
    </main>
  );
};

export default MainEditor;
