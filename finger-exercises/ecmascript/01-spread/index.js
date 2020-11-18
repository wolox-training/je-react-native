import { isArray } from './utils';

// This function returns the minimun value from an array or a list of parameters
export function min(element, ...others) {
  if (!element) return undefined;
  if (element && isArray(element)) {
    return Math.min(...element);
  }
  return Math.min(element, ...others);
}

// This function returns a copy of an object or an array
export function copy(element) {
  if (!element) return undefined;
  return isArray(element) ? [...element] : { ...element };
}

export function reverseMerge(arra, arrb) {
  return [...arrb, ...arra];
}

// This function filters out the attributes a and b of the given object
export function filterAttribs(obj) {
  const { a, b, ...others } = obj;
  return others;
}
