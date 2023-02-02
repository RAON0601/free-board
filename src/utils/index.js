export const makeObjectFrom = (keys, values) => {
  if (keys.length !== values.length) return;

  return Object.fromEntries(
    keys.reduce((acc, cur, index) => acc.concat([[cur, values[index]]]), [])
  );
};

export const validateObjectValue = (obj) => {
  for (const key in obj) {
    if (!obj[key]) return false;
  }
  return true;
};
