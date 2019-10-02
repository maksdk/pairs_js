import { cons, car, cdr} from './solution1';

export const make = (numer, denom) => cons(numer, denom);
export const numer = (rat) => car(rat);
export const denom = (rat) => cdr(rat);
export const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;

// a/b = c/d, if a * d = c * b
export const isEqual = (rat1, rat2) =>  {
  return numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1);
};

// a/b + c/d = (a * d + b * c) / (b * d)
export const add = (rat1, rat2) => {
  return cons((numer(rat1) * denom(rat2) + denom(rat1) * numer(rat2)), denom(rat1) * denom(rat2));
};

// a/b - c/d = (a * d - b * c) / (b * d)
export const sub = (rat1, rat2) => {
  return cons((numer(rat1) * denom(rat2) - denom(rat1) * numer(rat2)), denom(rat1) * denom(rat2));
};

// a/b * c/d = (a * c) / (b * d)
export const mul = (rat1, rat2) => {
  return cons(numer(rat1) * numer(rat2), (denom(rat1) * denom(rat2)));
};

// a/b / c/d = (a * d) / (b * c)
export const div = (rat1, rat2) => {
  return cons(numer(rat1) * denom(rat2), denom(rat1) * numer(rat2));
};