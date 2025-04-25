"use client";

import type React from "react";

import { useState, useCallback } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureImageUploaderProps {
  onImageChange: (imageUrl: string | null) => void;
  initialImage?: string | null;
  className?: string;
}

export default function FeatureImageUploader({
  onImageChange,
  initialImage = null,
  className,
}: FeatureImageUploaderProps) {
  const [image, setImage] = useState<string | null>(initialImage);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target?.result as string;
          setImage(imageUrl);
          onImageChange(imageUrl);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target?.result as string;
          setImage(imageUrl);
          onImageChange(imageUrl);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageChange]
  );

  const removeImage = useCallback(() => {
    setImage(null);
    onImageChange(null);
  }, [onImageChange]);

  return (
    <div className={cn("w-full", className)}>
      {!image ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/20 hover:border-primary/50",
            "flex flex-col items-center justify-center gap-2"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Drag and drop your image</p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
          <label htmlFor="feature-image-upload" className="mt-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="cursor-pointer"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
            <input
              id="feature-image-upload"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleImageChange}
            />
          </label>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden border border-border">
          <Image
            src={image || "/placeholder.svg"}
            alt="Feature"
            className="w-full h-[250px] object-cover"
            height={250}
            width={300}
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
