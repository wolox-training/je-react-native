import { isArray } from './utils';

export function min(element, ...others) {
  if (element && isArray(element)) {
    return Math.min(...element);
  }
  if (typeof element === 'number' && others.length) {
    return Math.min(element, ...others);
  }
  return element;
}

// eslint-disable-next-line consistent-return
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

export function filterAttribs() {}
