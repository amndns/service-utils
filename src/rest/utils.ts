export enum ResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface BaseResponse {
  status: ResponseStatus;
}

export interface SuccessResponse<T> extends BaseResponse {
  result: T;
}

export interface ErrorResponse extends BaseResponse {
  error_code: string;
  message: string;
}

export type SuccessResponsePromise<T> = Promise<SuccessResponse<T>>;

/**
 * Wrapper for the endpoint controller response promises to resolve to a
 * `SuccessResponse`-shaped response object.
 */
export async function controllerResponse<T>(
  promise: Promise<T>
): SuccessResponsePromise<T> {
  return promise.then((result: T) => ({
    status: ResponseStatus.SUCCESS,
    result,
  }));
}
