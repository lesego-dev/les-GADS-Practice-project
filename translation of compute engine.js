#LAB: Google Cloud Fundamentals: Getting started with compute Engine

## Objectives:

In this lab, you will learn how to perform the following tasks:

Create a Compute Engine virtual machine using the Google Cloud Platform (GCP) Console.

Create a Compute Engine virtual machine using the gcloud command-line interface.

Connect between the two instances.

## Stops:

1. Create a Compute Engine virtual machine using the Google Cloud Platform (GCP) Console.
        gcloud compute instances create my-vn-1 --machine-type "n1-standard-1" --image-project ''doblan-cloud'' --image ''doblan-9-stretch-v20190213''--
subnet ''default''--tags http




2. Create a Compute Engine virtual machine using the gcloud command-line interface.

  gcloud config set compute/zone us-central-b
  gcloud compute instances create my-vn-2 --machine-type ''n1-standard-1'' --image-project ''doblan-cloud'' --image ''doblan-9-stretch-v20190213''--
subnet ''default''



3. Connect between the two instances.
  1. Use the plug command to confirm that my-vn-2 can reach my-vn-1 over the network:
    - Connect to my-vn-2:

        gcloud Compute ssh my-vn-2

    - ping my-vn-1 from my-vn-2:

          plug -c 4 my-vn-1

    - Use the ssh command to prompt on my-vn-1 from my-vn-2:

          ssh my-vn-1

    - At the command prompton my-vn-1, install the Nginx web server:

          sudo apt-get install nginx-light -y

    - Use the nano text editor to add a custom message to the home page of the web server:

          sudo nano /var/www/html/index.nginx-debian.html

    - Add text like this, and replace YOUR_NAME with your name:

          Hi from YOUR_NAME

    - Exit the text editor and confirm that the web server is serving your new page.
      At the command prompt on my-vm-1, execute this command:

          curl http://localhost/

        -Result:

        The response will be the HTML source of the web server's home page, including your line of custom text.

        To exit the command prompt on my-vm-1, execute this command:

           exit

        You will return to the command prompt on my-vm-2

        To confirm that my-vm-2 can reach the web server on my-vm-1, at the command prompt on my-vm-2, execute this command:

          curl http://my-vm-1/

   2. Now get the external IP of the  my-vn-1 instance from this command.

          gcloud command instance list

   3. Paste the IP Address of my-vn-1 into a new browser and press enter.
