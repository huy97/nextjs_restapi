import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatus } from '~/constants/http-status';

export type ApiHandler = (
  req: NextApiRequest,
  res: ResponseType,
) => Promise<void>;

export type ApiJsonResponse<T = any> = {
  status?: HttpStatus;
  message?: string;
  data?: T;
};

export type ResponseType<T = any> = {} & NextApiResponse<ApiJsonResponse<T>>;

export type RequestType = {
  user?: User;
} & NextApiRequest;
