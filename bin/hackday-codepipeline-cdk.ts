#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyPipelineStack } from '../lib/hackday-codepipeline-cdk-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'HackdayCodepipelineCdkStack',{
  env: {
    account: '994206165806',
    region: 'eu-west-1',
  }
});

app.synth();
