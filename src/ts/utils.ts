/**
 * Checks if a value is not undefined and not null.
 */
export const isDefined = (value: any): boolean =>
  value !== null && value !== undefined;

/**
 * Converts a numeric string into a number.
 */
export const toNumber = (value: string): number => parseInt(value, 10);

/**
 * Converts a boolean string into a boolean.
 */
export const toBool = (value: string): boolean => value === 'true';

/**
 * Converts a single value into an single-value array. If an array is supplied,
 * return the array, instead.
 */
export function toArray<T = string>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
