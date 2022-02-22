export const isNotnull = (val) => val !== undefined && val !== null;
export const isNull = (val) => val === undefined || val === null;
export const getLast = (list) => list[list.length - 1];
export const getRandom = (max = 10, min = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
