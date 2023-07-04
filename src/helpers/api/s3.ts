import * as AWS from 'aws-sdk';

const globalS3: any = globalThis as unknown as {
  s3: AWS.S3 | undefined;
};

const s3: AWS.S3 = globalS3.s3 ?? new AWS.S3();

if (process.env.NODE_ENV !== 'production') globalS3.s3 = s3;

export const getUploadUrl = async (
  key: string,
  type: string,
  expired = 3600,
) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    Expires: expired,
    ContentType: type,
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject', params, (err, url) => {
      if (err) reject(err);
      resolve(url);
    });
  });
};

export const getDownloadUrl = async (key: string, expired = 3600) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    Expires: expired,
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('getObject', params, (err, url) => {
      if (err) reject(err);
      resolve(url);
    });
  });
};

export const getPublicUrl = (key: string) => {
  return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
};

export const deleteObject = async (key: string) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
  };

  return s3.deleteObject(params).promise();
};

export const deleteObjects = async (keys: string[]) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Delete: {
      Objects: keys.map((key) => ({ Key: key })),
    },
  };

  return s3.deleteObjects(params).promise();
};

export const copyObject = async (sourceKey: string, targetKey: string) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    CopySource: `${process.env.S3_BUCKET_NAME}/${sourceKey}`,
    Key: targetKey,
  };

  return s3.copyObject(params).promise();
};
