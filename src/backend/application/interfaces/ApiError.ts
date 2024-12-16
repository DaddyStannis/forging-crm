export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
  details?: Array<{ field: string; message: string }>;
  timestamp?: string;
}
