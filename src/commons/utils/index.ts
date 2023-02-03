//   keys.reduce((acc, cur, index) => acc.concat([[cur, values[index]]]), []) Type 오류 때문에 잠시 변경
export const makeObjectFrom = (keys: string[], values: any[]) => {
  if (keys.length !== values.length) return;

  const length = keys.length;
  const arr: Array<[string, any]> = [];

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

export const formatYYYYMMDD = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
};
