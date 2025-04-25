"use client";

import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import FeatureImageUploader from "./feature-image-uploader";
import { Button } from "@/components/ui/button";
import { ImageIcon, PlusCircleIcon, MinusCircleIcon } from "lucide-react";
import Image from "next/image";

const TipTapEditor = dynamic(
  () => import("./tip-client-edtor").then((mod) => mod.default),
  { ssr: false }
);

interface Content {
  title: string;
  subTitle: string;
  featureImage: string | null;
}

const MainEditor: React.FC = () => {
  const [content, setContent] = useState<Content>({
    title: "",
    subTitle: "",
    featureImage: null,
  });
  const [isEditable] = useState<boolean>(true);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);
  const [isFeatureImageExpanded, setIsFeatureImageExpanded] =
    useState<boolean>(false);

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

  // Handle feature image change
  const handleFeatureImageChange = useCallback((imageUrl: string | null) => {
    setContent((prev) => ({ ...prev, featureImage: imageUrl }));
  }, []);

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

      <div className="mb-6 pb-2">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center justify-between w-full p-0 h-auto"
          onClick={() => setIsFeatureImageExpanded(!isFeatureImageExpanded)}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <ImageIcon className="h-4 w-4" />
            <span className="text-sm font-medium">
              {content.featureImage
                ? "Feature image added"
                : "Add feature image (optional)"}
            </span>
          </div>
          {isFeatureImageExpanded ? (
            <MinusCircleIcon className="h-4 w-4 text-muted-foreground" />
          ) : (
            <PlusCircleIcon className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>

        {content.featureImage && !isFeatureImageExpanded && (
          <div className="mt-2 relative h-16 w-full overflow-hidden rounded-md border border-border">
            <Image
              src={content.featureImage || "/placeholder.svg"}
              alt="Feature"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {isFeatureImageExpanded && (
          <div className="mt-2">
            <FeatureImageUploader
              onImageChange={handleFeatureImageChange}
              initialImage={content.featureImage}
            />
          </div>
        )}
      </div>

      <TipTapEditor isEditable={isEditable} />
    </main>
  );
};

export default MainEditor;
