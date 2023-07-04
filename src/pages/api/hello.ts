import { HttpStatus } from '~/constants/http-status';
import apiHandler from '~/helpers/api/api-handler';
import { RequestType, ResponseType } from '~/models';

const handler = async (req: RequestType, res: ResponseType) => {
  // console.log(req.user);

  const token = jwt;

  res.status(HttpStatus.OK).json({
    status: HttpStatus.OK,
    data: 'Hello World',
  });
};

export default apiHandler(handler);
