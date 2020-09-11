# LAB: Google Cloud Fundamentals: Getting Started with BigQuery

## Objectives:

In this lab, you learn how to perform the following tasks:

Load data from Cloud Storage into BigQuery.

Perform a query on the data in BigQuery.

## Stops:

1.Create a new dataset.

    gcloud BigQuery Create Dataset -- Dataset ID-- "logdata" --  Data location "US"
      Create


2.Create a new table in the logdata to store the data from the CSV file.

    gcloud BigQuery logdata Create Table --

      -Source section:
       -- Create table from "Google Cloud Storage" -- in the field, type-- "gs://cloud-training/gcpfci/access_log.csv".

      -Destination section:
       -- Dataset name-- "logdata"--Table name-- "accesslog"-- Table type-- "Native table".

      - Schema section:
       -- Auto detect check-- "Schema and input Parameters"--
       subnet  "default" -- Create Table--

      - To track job progress:
       gcloud BigQuery Job History -- logdata -- "accesslog"--


3. Perform a query on the data using the BigQuery web UI.

    gcloud BigQuery logdata:
      --Query editor:

        "select int64_field_6 as hour, count(*) as hitcount from logdata.accesslog
         group by hour
         order by hour"

    --Click Run--

4. Perform a query on the data using the bq command.

    -gcloud Platform Console Cloud Shell:
      --enter this command--
      bq query "select string_field_10 as request, count(*) as requestcount from logdata.accesslog group by request order by requestcount desc"

    Result

    Its name will look like qwiklabs-gcp- followed by a hexadecimal number.
