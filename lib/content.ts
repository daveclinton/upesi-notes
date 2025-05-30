/* eslint-disable @typescript-eslint/no-explicit-any */
interface Mark {
  type: string;
  attrs?: Record<string, any>;
}

interface Content {
  type: string;
  text?: string;
  attrs?: Record<string, any>;
  marks?: Mark[];
  content?: Content[];
}

interface HeadingNode extends Content {
  type: "heading";
  attrs: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
  content: TextNode[];
}

interface ParagraphNode extends Content {
  type: "paragraph";
  content?: (TextNode | EmojiNode | MathInlineNode)[];
}

interface BlockquoteNode extends Content {
  type: "blockquote";
  content: ParagraphNode[];
}

interface CodeBlockNode extends Content {
  type: "codeBlock";
  attrs: {
    language: string;
  };
  content: TextNode[];
}

interface HorizontalRuleNode extends Content {
  type: "horizontalRule";
}

interface OrderedListNode extends Content {
  type: "orderedList";
  attrs: {
    start: number;
  };
  content: ListItemNode[];
}

interface BulletListNode extends Content {
  type: "bulletList";
  content: ListItemNode[];
}

interface TaskListNode extends Content {
  type: "taskList";
  content: TaskItemNode[];
}

interface ListItemNode extends Content {
  type: "listItem";
  content: (ParagraphNode | OrderedListNode | BulletListNode)[];
}

interface TaskItemNode extends Content {
  type: "taskItem";
  attrs: {
    checked: boolean;
  };
  content: (ParagraphNode | TaskListNode)[];
}

interface DetailsNode extends Content {
  type: "details";
  attrs: {
    open: boolean;
  };
  content: (DetailsSummaryNode | DetailsContentNode)[];
}

interface DetailsSummaryNode extends Content {
  type: "detailsSummary";
  content: TextNode[];
}

interface DetailsContentNode extends Content {
  type: "detailsContent";
  content: (ParagraphNode | CodeBlockNode)[];
}

interface TableNode extends Content {
  type: "table";
  content: TableRowNode[];
}

interface TableRowNode extends Content {
  type: "tableRow";
  content: (TableHeaderNode | TableCellNode)[];
}

interface TableHeaderNode extends Content {
  type: "tableHeader";
  attrs: {
    colspan: number;
    rowspan: number;
    colwidth: number | null;
    align: string | null;
  };
  content: ParagraphNode[];
}

interface TableCellNode extends Content {
  type: "tableCell";
  attrs: {
    colspan: number;
    rowspan: number;
    colwidth: number | null;
    align: string | null;
  };
  content: ParagraphNode[];
}

interface ImageNode extends Content {
  type: "image";
  attrs: {
    src: string;
    alt: string;
    title: string;
    align: string;
    width: number;
  };
}

interface AudioNode extends Content {
  type: "audio";
  attrs: {
    src: string;
    title: string;
    align: string;
    width: number;
  };
}

interface VideoNode extends Content {
  type: "video";
  attrs: {
    src: string;
    title: string;
    align: string;
    width: number;
  };
}

interface MermaidNode extends Content {
  type: "mermaid";
  content: TextNode[];
}

interface PlantumlNode extends Content {
  type: "plantuml";
  content: TextNode[];
}

interface MathBlockNode extends Content {
  type: "mathBlock";
  content: TextNode[];
}

// Inline nodes
interface TextNode extends Content {
  type: "text";
  text?: string;
  marks?: Mark[];
}

interface EmojiNode extends Content {
  type: "emoji";
  attrs: {
    value: string;
  };
}

interface MathInlineNode extends Content {
  type: "mathInline";
  attrs: {
    value: string;
  };
}

// Union type for all possible nodes
type EditorNode =
  | HeadingNode
  | ParagraphNode
  | BlockquoteNode
  | CodeBlockNode
  | HorizontalRuleNode
  | OrderedListNode
  | BulletListNode
  | TaskListNode
  | DetailsNode
  | TableNode
  | ImageNode
  | AudioNode
  | VideoNode
  | MermaidNode
  | PlantumlNode
  | MathBlockNode;

export const editorContent: EditorNode[] = [
  {
    type: "heading",
    attrs: {
      level: 1,
    },
    content: [
      {
        type: "text",
        text: "Heading 1",
      },
    ],
  },
  {
    type: "heading",
    attrs: {
      level: 2,
    },
    content: [
      {
        type: "text",
        text: "Heading 2",
      },
    ],
  },
  {
    type: "heading",
    attrs: {
      level: 3,
    },
    content: [
      {
        type: "text",
        text: "Heading 3",
      },
    ],
  },
  {
    type: "heading",
    attrs: {
      level: 4,
    },
    content: [
      {
        type: "text",
        text: "Heading 4",
      },
    ],
  },
  {
    type: "heading",
    attrs: {
      level: 5,
    },
    content: [
      {
        type: "text",
        text: "Heading 5",
      },
    ],
  },
  {
    type: "heading",
    attrs: {
      level: 6,
    },
    content: [
      {
        type: "text",
        text: "Heading 6",
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        marks: [
          {
            type: "bold",
          },
        ],
        text: "bold",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "code",
          },
        ],
        text: "code",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "italic",
          },
        ],
        text: "italic",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "link",
            attrs: {
              href: "https://github.com/syfxlin/tiptap-starter-kit",
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              class: null,
            },
          },
        ],
        text: "link",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "strike",
          },
        ],
        text: "strike",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "highlight",
            attrs: {
              color: null,
            },
          },
        ],
        text: "highlight",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "highlight",
            attrs: {
              color: "violet",
            },
          },
        ],
        text: "highlight",
      },
      {
        type: "text",
        text: " ",
      },
      {
        type: "text",
        marks: [
          {
            type: "highlight",
            attrs: {
              color: "b-violet",
            },
          },
        ],
        text: "highlight",
      },
      {
        type: "text",
        text: " superscript",
      },
      {
        type: "text",
        marks: [
          {
            type: "superscript",
          },
        ],
        text: "2",
      },
      {
        type: "text",
        text: " subscript",
      },
      {
        type: "text",
        marks: [
          {
            type: "subscript",
          },
        ],
        text: "2 ",
      },
      {
        type: "emoji",
        attrs: {
          value: "lemon",
        },
      },
      {
        type: "emoji",
        attrs: {
          value: "1234",
        },
      },
      {
        type: "mathInline",
        attrs: {
          value: "E = mc^2",
        },
      },
    ],
  },
  {
    type: "blockquote",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "blockquote",
          },
        ],
      },
    ],
  },
  {
    type: "codeBlock",
    attrs: {
      language: "javascript",
    },
    content: [
      {
        type: "text",
        text: 'console.log("code block");',
      },
    ],
  },
  {
    type: "horizontalRule",
  },
  {
    type: "orderedList",
    attrs: {
      start: 1,
    },
    content: [
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 1",
              },
            ],
          },
        ],
      },
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 2",
              },
            ],
          },
          {
            type: "orderedList",
            attrs: {
              start: 1,
            },
            content: [
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "item 3",
                      },
                    ],
                  },
                  {
                    type: "orderedList",
                    attrs: {
                      start: 1,
                    },
                    content: [
                      {
                        type: "listItem",
                        content: [
                          {
                            type: "paragraph",
                            content: [
                              {
                                type: "text",
                                text: "item 4",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 5",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "bulletList",
    content: [
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 1",
              },
            ],
          },
        ],
      },
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 2",
              },
            ],
          },
          {
            type: "bulletList",
            content: [
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "item 3",
                      },
                    ],
                  },
                  {
                    type: "bulletList",
                    content: [
                      {
                        type: "listItem",
                        content: [
                          {
                            type: "paragraph",
                            content: [
                              {
                                type: "text",
                                text: "item 4",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "listItem",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 5",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "taskList",
    content: [
      {
        type: "taskItem",
        attrs: {
          checked: false,
        },
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 1",
              },
            ],
          },
        ],
      },
      {
        type: "taskItem",
        attrs: {
          checked: false,
        },
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 2",
              },
            ],
          },
          {
            type: "taskList",
            content: [
              {
                type: "taskItem",
                attrs: {
                  checked: true,
                },
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "item 3",
                      },
                    ],
                  },
                  {
                    type: "taskList",
                    content: [
                      {
                        type: "taskItem",
                        attrs: {
                          checked: false,
                        },
                        content: [
                          {
                            type: "paragraph",
                            content: [
                              {
                                type: "text",
                                text: "item 4",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "taskItem",
        attrs: {
          checked: false,
        },
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "item 5",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "details",
    attrs: {
      open: true,
    },
    content: [
      {
        type: "detailsSummary",
        content: [
          {
            type: "text",
            text: "details summary ",
          },
          {
            type: "text",
            marks: [
              {
                type: "bold",
              },
            ],
            text: "bold",
          },
        ],
      },
      {
        type: "detailsContent",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "details content",
              },
            ],
          },
          {
            type: "codeBlock",
            attrs: {
              language: "plaintext",
            },
            content: [
              {
                type: "text",
                text: "code",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "table",
    content: [
      {
        type: "tableRow",
        content: [
          {
            type: "tableHeader",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Header1",
                  },
                ],
              },
            ],
          },
          {
            type: "tableHeader",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Header2",
                  },
                ],
              },
            ],
          },
          {
            type: "tableHeader",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Header3",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tableRow",
        content: [
          {
            type: "tableCell",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Cell1",
                  },
                ],
              },
            ],
          },
          {
            type: "tableCell",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Cell2",
                  },
                ],
              },
            ],
          },
          {
            type: "tableCell",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Cell3",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tableRow",
        content: [
          {
            type: "tableCell",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Cell1",
                  },
                ],
              },
            ],
          },
          {
            type: "tableCell",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Cell2",
                  },
                ],
              },
            ],
          },
          {
            type: "tableCell",
            attrs: {
              colspan: 1,
              rowspan: 1,
              colwidth: null,
              align: null,
            },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Cell3",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "image",
    attrs: {
      src: "https://source.unsplash.com/random",
      alt: "image",
      title: "",
      align: "center",
      width: 500,
    },
  },
  {
    type: "audio",
    attrs: {
      src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
      title: "",
      align: "center",
      width: 500,
    },
  },
  {
    type: "video",
    attrs: {
      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
      title: "",
      align: "center",
      width: 500,
    },
  },
  {
    type: "mermaid",
    content: [
      {
        type: "text",
        text: "graph TD;\n  A-->B;  A-->C;\n  B-->D;\n  C-->D;",
      },
    ],
  },
  {
    type: "plantuml",
    content: [
      {
        type: "text",
        text: "@startuml\nBob -> Alice : hello\n@enduml",
      },
    ],
  },
  {
    type: "mathBlock",
    content: [
      {
        type: "text",
        text: "E = mc^2",
      },
    ],
  },
  {
    type: "paragraph",
  },
];
