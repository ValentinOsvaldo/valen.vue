export const useClipboard = () => {
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return {
    copy,
  };
};
