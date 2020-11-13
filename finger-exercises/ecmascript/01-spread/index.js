import { isArray } from './utils';

export function min(element) {
  if (isArray(element)) {
    return Math.min(...element);
  }
  return element;
}

export function copy() {}

export function reverseMerge() {}

export function filterAttribs() {}
