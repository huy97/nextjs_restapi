/// <reference types="node" />

namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly APP_NAME: string;
    readonly DATABASE_URL: string;
    readonly JWT_SECRET: string;
    readonly JWT_EXPIRES_IN: string;
    readonly JWT_REFRESH_SECRET: string;
    readonly JWT_REFRESH_EXPIRES_IN: string;
    readonly S3_BUCKET_NAME: string;
  }
}
