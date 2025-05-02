import {
  Editor,
  Node,
  type Range,
  ExtensionBlockquote,
  mergeAttributes,
} from "@halo-dev/richtext-editor";
import { markRaw } from "vue";
import MdiBookOpenVariant from "~icons/mdi/book-open-variant";

declare module "@halo-dev/richtext-editor" {
  interface Commands<ReturnType> {
    verse: {
      addVerse: () => ReturnType;
    };
  }
}

const Verse: Node = ExtensionBlockquote.extend({
  name: "verse",
  defining: true,
  addOptions() {
    return {
      getCommandMenuItems() {
        return {
          priority: 81,
          icon: markRaw(MdiBookOpenVariant),
          title: "诗篇",
          keywords: ["poem", "poetry", "verse", "段落", "诗"],
          command: ({ editor, range }: { editor: Editor; range: Range }) => {
            editor.chain().deleteRange(range).addVerse().run();
          },
        };
      },
    };
  },
  addInputRules() {
    // this is to clear the "> " pattern from the original BlockQuote
    return [];
  },
  addKeyboardShortcuts() {
    // same as above
    return {};
  },
  addAttributes() {
    return {
      class: "verse-block",
    };
  },
  addCommands() {
    return {
      addVerse:
        () =>
        ({ chain }) => {
          return chain().toggleWrap(this.type).run();
        },
    };
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },
  parseHTML() {
    return [{ tag: "div", attrs: { class: "verse-block" } }];
  },
});

export default Verse;
