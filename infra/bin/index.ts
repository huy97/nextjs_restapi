#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'dotenv/config';
import { NetworkStack } from '../stacks/network-stack';
import { prefix } from '../stacks/parameter';

const app = new cdk.App();

const network = new NetworkStack(app, `${prefix}-network-stack`);
