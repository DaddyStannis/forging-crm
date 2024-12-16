import { ApiError } from "../interfaces/ApiError";

export function createErrorResponse(
  error: string,
  message: string,
  statusCode: number,
  details?: Array<{ field: string; message: string }>
): ApiError {
  return {
    error,
    message,
    statusCode,
    details,
    timestamp: new Date().toISOString(),
  };
}
