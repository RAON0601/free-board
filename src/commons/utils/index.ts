//   keys.reduce((acc, cur, index) => acc.concat([[cur, values[index]]]), []) Type 오류 때문에 잠시 변경
export const makeObjectFrom = (keys: string[], values: any[]) => {
  if (keys.length !== values.length) return;

  const length = keys.length;
  const arr: [string, any][] = [];

  for (let i = 0; i < length; i++) {
    arr.push([keys[i], values[i]]);
  }

  return Object.fromEntries(arr);
};

export const validateObjectValue = (obj: any) => {
  for (const key in obj) {
    if (!obj[key]) return false;
  }
  return true;
};
