import { TFFunction } from '../types/functions/index.js';

export const functionType: TFFunction = (fn) => {
  return Object.prototype.hasOwnProperty.call(fn, 'prototype')
    ? 'normal'
    : 'arrow';
};
