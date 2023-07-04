import { expressjwt as jwt } from 'express-jwt';
import { NextApiRequest, NextApiResponse } from 'next';

const util = require('util');

const jwtMiddleware = (req: NextApiRequest, res: NextApiResponse) => {
  const middleware = jwt({
    secret: process.env.JWT_SECRET!,
    algorithms: ['HS256'],
  }).unless({
    path: ['/api/users/login'],
  });

  return util.promisify(middleware)(req, res);
};

export default jwtMiddleware;
