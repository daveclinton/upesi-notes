"use client";

import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  CSSProperties,
  HTMLAttributes,
} from "react";

interface ControlledEditableContentProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onChange" | "dangerouslySetInnerHTML"
  > {
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
  className?: string;
  placeholder?: string;
}

const ControlledEditableContent: React.FC<ControlledEditableContentProps> = ({
  value,
  onChange,
  style = {},
  className = "",
  placeholder = "Type here...",
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const caretPositionRef = useRef<number | null>(null);

  useEffect(() => {
    if (divRef.current && divRef.current.textContent !== value) {
      // Store current caret position
      const selection = window.getSelection();
      if (
        selection &&
        selection.rangeCount > 0 &&
        document.activeElement === divRef.current
      ) {
        const range = selection.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(divRef.current);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretPositionRef.current = preCaretRange.toString().length;
      }

      // Update content
      divRef.current.textContent = value;

      // Restore caret position
      if (
        caretPositionRef.current !== null &&
        document.activeElement === divRef.current
      ) {
        const newRange = document.createRange();
        let offset = caretPositionRef.current;
        let node: Node = divRef.current;

        // Find the correct text node and offset
        const treeWalker = document.createTreeWalker(
          divRef.current,
          NodeFilter.SHOW_TEXT
        );
        let currentLength = 0;

        while (treeWalker.nextNode()) {
          const textNode = treeWalker.currentNode;
          const nodeLength = textNode.textContent?.length || 0;

          if (currentLength + nodeLength >= offset) {
            node = textNode;
            offset -= currentLength;
            break;
          }
          currentLength += nodeLength;
        }

        newRange.setStart(
          node,
          Math.min(offset, node.textContent?.length || 0)
        );
        newRange.setEnd(node, Math.min(offset, node.textContent?.length || 0));
        selection?.removeAllRanges();
        selection?.addRange(newRange);
      }
    }
  }, [value]);

  const handleInput = useCallback(() => {
    if (onChange && divRef.current) {
      onChange(divRef.current.textContent || "");
    }
  }, [onChange]);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  const defaultStyle: CSSProperties = {
    outline: "none",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    ...style,
  };

  const showPlaceholder = !value && !isFocused;

  return (
    <div
      ref={divRef}
      contentEditable="plaintext-only"
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={className}
      style={defaultStyle}
      data-placeholder={showPlaceholder ? placeholder : ""}
      {...rest}
    />
  );
};

export default ControlledEditableContent;
