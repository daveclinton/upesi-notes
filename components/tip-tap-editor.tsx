"use client";

import React, { useState, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

interface Content {
  title: string;
  subTitle: string;
}

const MainEditor = () => {
  const [content, setContent] = useState<Content>({ title: "", subTitle: "" });
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);

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

  const adjustHeight = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: keyof Content
  ) => {
    setContent((prev) => ({ ...prev, [field]: e.target.value }));
    adjustHeight(e.target);
  };

  const textareaProps = {
    className:
      "mousetrap text-muted-foreground mb-2 outline-none w-full resize-none",
    maxLength: 200,
    "data-gramm": "false",
    "data-gramm_editor": "false",
    "data-enable-grammarly": "false",
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <textarea
        ref={titleRef}
        id="post-title"
        data-testid="post-title"
        aria-label="title"
        placeholder="Title"
        value={content.title}
        onChange={(e) => handleChange(e, "title")}
        {...textareaProps}
        className={`${textareaProps.className} text-3xl text-primary`}
      />
      <textarea
        ref={subtitleRef}
        id="post-subtitle"
        data-testid="post-subtitle"
        aria-label="subtitle"
        placeholder="Subtitle"
        value={content.subTitle}
        onChange={(e) => handleChange(e, "subTitle")}
        {...textareaProps}
        className={`${textareaProps.className} text-xl text-primary`}
      />
      <EditorContent editor={editor} />
    </main>
  );
};

export default MainEditor;
