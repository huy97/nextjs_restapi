import * as cdk from 'aws-cdk-lib';

export const prefix = `${process.env.APP_NAME}-${process.env.NODE_ENV}`;

export const InfraParameter = {
  vpc: {
    id: `${prefix}-vpc`,
    cidr: cdk.aws_ec2.IpAddresses.cidr('10.0.0.0/16'),
    publicSubnetName: `${prefix}-public-subnet`,
    privateSubnetName: `${prefix}-private-subnet`,
  },
  securityGroup: {
    id: `${prefix}-security-group`,
  },
  s3: {
    id: `${prefix}-s3`,
  },
};
