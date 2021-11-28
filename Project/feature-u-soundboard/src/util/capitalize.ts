const capitalize = (x: string): string => {
  const newStr = x.charAt(0).toUpperCase() + x.slice(1);
  return newStr;
};

export default capitalize;
