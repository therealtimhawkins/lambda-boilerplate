<h1 align="center">⛅️ AWS Lambda Boilerplate</h1>

This repo contains boilerplate code to locally develop Nodejs Lambda functions. It includes a testing framework and build file to push your code to AWS from the command line.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Nodejs on your local machine
* An Amazon Web Services account
* AWS CLI installed

### Installing

```npm install``` in the root of the project

## Running the tests

```npm test``` in the root of the project


## Deployment

```./build.sh LambdaFunction``` will deploy to a Lambda function named LambdaFunction on your AWS account
