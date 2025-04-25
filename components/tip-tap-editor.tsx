"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const TipTapEditor = dynamic(
  () => import("./tip-client-edtor").then((mod) => mod.default),
  { ssr: false }
);

interface Content {
  title: string;
  subTitle: string;
}

const MainEditor: React.FC = () => {
  const [content, setContent] = useState<Content>({ title: "", subTitle: "" });
  const [isEditable] = useState<boolean>(true);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);

  // Memoized textarea height adjustment
  const adjustHeight = useCallback((textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  // Effect to adjust heights of textareas when content changes
  useEffect(() => {
    adjustHeight(titleRef.current);
    adjustHeight(subtitleRef.current);
  }, [content.title, content.subTitle, adjustHeight]);

  // Handle changes to title or subtitle
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>, field: keyof Content) => {
      setContent((prev) => ({ ...prev, [field]: e.target.value }));
      adjustHeight(e.target);
    },
    [adjustHeight]
  );

  // Common textarea props
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
        className={`${textareaProps.className} text-3xl text-primary ${
          !isEditable ? "opacity-70" : ""
        }`}
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
        className={`${textareaProps.className} text-xl text-primary ${
          !isEditable ? "opacity-70" : ""
        }`}
      />

      <TipTapEditor isEditable={isEditable} />
    </main>
  );
};

export default MainEditor;
