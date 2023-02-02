export const makeObjectFrom = (keys, values) => {
  if (keys.length !== values.length) return;

  const length = keys.length;
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push([keys[i], values[i]]);
  }

  return Object.fromEntries(arr);
};
