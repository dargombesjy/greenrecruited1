// import type { BlockNode, InlineNode, LinkNode, TextNode } from '$lib/types/blocks.js';

/** Text node guard */
export function isTextNode(n) {
  return n?.type === "text";
}

/** Link node guard */
export function isLinkNode(n) {
  return n?.type === "link";
}

/** Collect active inline modifiers */
export function getActiveModifiers(n) {
  const m = [];
  if (n.bold) m.push("bold");
  if (n.italic) m.push("italic");
  if (n.underline) m.push("underline");
  if (n.strikethrough) m.push("strikethrough");
  if (n.code) m.push("code");
  return m;
}

/** Merge component maps */
export function mergeComponents(def, over) {
  return over ? { ...def, ...over } : def;
}

/** Unique key per block */
export function generateBlockKey(node, idx) {
  if (node.type === "image" && node.image.hash) {
    return `img-${node.image.hash}-${idx}`;
  }
  return `${node.type}-${idx}`;
}
