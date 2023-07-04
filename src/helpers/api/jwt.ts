import jwt from 'jsonwebtoken';

export const signJwt = (
  payload: any,
  secret = process.env.JWT_SECRET!,
  options: jwt.SignOptions,
) => {
  return jwt.sign(payload, secret, { expiresIn: '1d', ...options });
};

export const verifyJwt = (
  token: string,
  secret = process.env.JWT_SECRET!,
  options: jwt.VerifyOptions,
) => {
  return jwt.verify(token, secret, options);
};

export const decodeJwt = (token: string, options: jwt.DecodeOptions) => {
  return jwt.decode(token, options);
};
