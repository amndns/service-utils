import { join } from 'path';

/**
 * Retrieves the value of the environment variable. Throws an error if the
 * variable doesn't exist.
 */
export const getOsEnv = (key: string): string => {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] as string;
};

/**
 * Retrieves the value of the environment variable. Does not throw an error if
 * the variable doesn't exist.
 */
export const getOsEnvOptional = (key: string): string | undefined =>
  process.env[key];

/**
 * Retrieves the values of the string-delimited environment variable as an array.
 */
export const getOsEnvArray = (key: string, delimiter = ','): string[] =>
  (process.env[key] && process.env[key].split(delimiter)) || [];

/**
 * Retrieves the absolute path of a given relative path. Replaces `.ts` extension
 * to `.js`. When `replaceFolder` is true, this returns the absolute path of the
 * `dist/` folder.
 */
export const getPath = (path: string, replaceFolder = true): string => {
  const newPath =
    path.substr(-3) === '.ts'
      ? join(process.cwd(), path.slice(0, -3) + '.js')
      : join(process.cwd(), path);
  return replaceFolder ? newPath.replace('src/', 'dist/') : newPath;
};

/**
 * Retrieves the absolute paths given an array of relative paths by calling
 * `getPath`.
 */
export const getPaths = (paths: string[], replaceFolder = true): string[] =>
  paths.map((p) => getPath(p, replaceFolder));

/**
 * Wrapper for `getPath` to retrieve the absolute path of a given relative path
 * defined in an environment variable.
 */
export const getOsPath = (key: string, replaceFolder = true): string =>
  getPath(getOsEnv(key), replaceFolder);

/**
 * Wrapper for `getPaths` to retrieve the absolute paths of a given relative path
 * array defined in an environment variable.
 */
export const getOsPaths = (key: string): string[] =>
  getPaths(getOsEnvArray(key));
