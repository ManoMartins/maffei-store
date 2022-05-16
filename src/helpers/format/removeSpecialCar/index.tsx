export default function formatRemoveSpecialCaracters(str: string) {
  return str.replace(/[^\w\s]/gi, '').trim();
}
