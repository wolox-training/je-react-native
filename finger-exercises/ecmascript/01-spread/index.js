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

export function copy() {}

export function reverseMerge() {}

export function filterAttribs() {}
