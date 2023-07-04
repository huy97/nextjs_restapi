import { HttpStatus } from '~/constants/http-status';
import { ResponseType } from '~/models';

const errorHandler = (err: any, res: ResponseType) => {
  if (typeof err === 'string') {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ status: HttpStatus.BAD_REQUEST, message: err });
  }

  if (err.name === 'UnauthorizedError') {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ status: HttpStatus.UNAUTHORIZED, message: 'Unauthorized' });
  }

  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
};

export default errorHandler;
