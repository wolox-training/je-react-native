import { isArray } from './utils';

// This function returns the minimun value from an array or a list of parameters
export function min(element, ...others) {
  if (!element) return undefined;
  if (element && isArray(element)) {
    return Math.min(...element);
  }
  return Math.min(element, ...others);
}

export function copy(element) {
  if (element && element.constructor.name === 'Array') {
    return [...element];
  }
  if (element && element.constructor.name === 'Object') {
    return { ...element };
  }
}

export function reverseMerge(arra, arrb) {
  return [...arrb, ...arra];
}

export function filterAttribs(obj) {
  const objCopy = { ...obj };
  delete objCopy.a;
  delete objCopy.b;
  return objCopy;
}
