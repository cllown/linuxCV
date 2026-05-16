import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../types';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;

  const apiError: ApiError = {
    message: err.message || 'Internal Server Error',
    code: err.code || 'INTERNAL_ERROR',
    details: process.env.NODE_ENV === 'development' ? err : undefined,
  };

  console.error(`[Error ${status}]:`, apiError.message);

  res.status(status).json({
    success: false,
    error: apiError,
  });
};
