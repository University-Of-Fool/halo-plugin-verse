import "./styles/style.scss";
import { definePlugin } from "@halo-dev/console-shared";
import VerseNode from "./editor/verse";

export default definePlugin({
  extensionPoints: {
    "default:editor:extension:create": () => {
      return [VerseNode];
    },
  },
});
