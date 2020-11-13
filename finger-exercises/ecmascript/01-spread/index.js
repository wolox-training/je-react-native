import { isArray } from './utils';

export function min(element, ...others) {
  if (isArray(element)) {
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
