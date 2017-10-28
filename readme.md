


https://cloud.google.com/datastore/docs
https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/datastore


# Install google sdk
## init sdk


# Create bucket
gsutil mb gs://saatanankoodarit_api_function

# deploy function
gcloud beta functions deploy iotApi --stage-bucket saatanankoodarit_api_function --trigger-http --region=us-central1

# test a function
curl "https://us-central1-<organisation>.cloudfunctions.net/iotApi"


# List of regions 
gcloud beta functions regions list

https://cloud.google.com/sdk/gcloud/reference/beta/functions/regions/list


# create index
gcloud datastore create-indexes index.yaml

# delete unused index
gcloud datastore cleanup-indexes index.yaml

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With **npm**:

        npm install

    With **yarn**:
