export const truncate = (str: string, len = 20) => {
  return str.length > len ? str.slice(0, len) + '...' : str;
};
