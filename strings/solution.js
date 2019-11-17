export const cons = (elem1, elem2) => `${elem1}\0${elem2}`;
export const car = (pair) => pair.split("\0")[0];
export const cdr = (pair) => pair.split("\0")[1];