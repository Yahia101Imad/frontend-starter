export function capitalize(text) {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function truncate(text, length = 100) {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}