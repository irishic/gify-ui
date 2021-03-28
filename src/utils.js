const derivePropFromTheme = (themeObj, pathArray) => {
  if (!pathArray.length) {
    return themeObj;
  }
  const [propName = '', ...rest] = pathArray;

  return derivePropFromTheme(themeObj[propName], rest);
};

export const fromTheme = (path) => {
  return ({ theme }) => derivePropFromTheme(theme, path);
};

export const color = (colorName) => fromTheme(['colors', colorName]);
