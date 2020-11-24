export function cleanText(text: string) {
  const newText = text.trim().replace('/\r?\n|\r/g', '');
  return newText;
}
