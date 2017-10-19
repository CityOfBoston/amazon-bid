#!/bin/bash

export AWS_ACCESS_KEY_ID=$1
export AWS_SECRET_ACCESS_KEY=$2

cp ./src/pages/public.js ./src/pages/index.js
gatsby build

s3-website deploy public -r us-east-2 -d amazon-boston-gov
