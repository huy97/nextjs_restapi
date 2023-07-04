import { ApiHandler, RequestType, ResponseType } from '~/models';
import errorHandler from './error-handler';
import jwtMiddleware from './jwt-middleware';

const apiHandler = (handler: ApiHandler, isAuth: boolean = true) => {
  return async (req: RequestType, res: ResponseType) => {
    try {
      if (isAuth) {
        await jwtMiddleware(req, res);
      }
      await handler(req, res);
    } catch (err) {
      errorHandler(err, res);
    }
  };
};

export default apiHandler;
