import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { InfraParameter } from './parameter';

export class NetworkStack extends Stack {
  public readonly networkInstance: {
    vpc: cdk.aws_ec2.Vpc;
    securityGroup: cdk.aws_ec2.SecurityGroup;
  };

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpcInstance = new cdk.aws_ec2.Vpc(this, InfraParameter.vpc.id, {
      ipAddresses: InfraParameter.vpc.cidr,
      maxAzs: 1,
      subnetConfiguration: [
        {
          name: InfraParameter.vpc.publicSubnetName,
          subnetType: cdk.aws_ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: InfraParameter.vpc.privateSubnetName,
          subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
    });

    const securityGroupInstance = new cdk.aws_ec2.SecurityGroup(
      this,
      InfraParameter.securityGroup.id,
      {
        vpc: vpcInstance,
      },
    );

    securityGroupInstance.addIngressRule(
      cdk.aws_ec2.Peer.anyIpv4(),
      cdk.aws_ec2.Port.tcp(22),
      'Allow SSH connections from anywhere',
    );

    this.networkInstance = {
      vpc: vpcInstance,
      securityGroup: securityGroupInstance,
    };
  }
}
