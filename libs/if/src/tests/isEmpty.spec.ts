import { ifEmpty } from '../lib/core/isEmpty.js';

describe('ifEmpty', () => {
  it('should return true for 0', () => {
    expect(ifEmpty(0)).toBe(true);
  });

  it('should return false for non-zero number', () => {
    expect(ifEmpty(42)).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(ifEmpty('')).toBe(true);
  });

  it('should return false for non-empty string', () => {
    expect(ifEmpty('hello')).toBe(false);
  });

  it('should return true for empty object', () => {
    expect(ifEmpty({})).toBe(true);
  });

  it('should return false for object with keys', () => {
    expect(ifEmpty({ a: 1 })).toBe(false);
  });

  it('should return true for undefined', () => {
    expect(ifEmpty(undefined)).toBe(true);
  });

  it('should return true for null', () => {
    expect(ifEmpty(null)).toBe(true);
  });

  it('should return true for false', () => {
    expect(ifEmpty(false)).toBe(true);
  });

  it('should return false for true', () => {
    expect(ifEmpty(true)).toBe(false);
  });

  it('should return true for empty array', () => {
    expect(ifEmpty([])).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(ifEmpty([1, 2, 3])).toBe(false);
  });
});
