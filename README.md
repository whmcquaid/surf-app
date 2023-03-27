# surf-app

Application to view current surf reports for Bay Area California

### Utilizing puppeteer for web scraping and node-cron for scheduling tasks

- Use Node, node-cron, puppeteer, express, and mongoose to schedule, scrape, store data, and send data to frontend.
- Display on simple Vue frontend.

### Setup instructions:

- if you do not already have a mongodb account, make a MongoDB account using your browser to navigate to mongodb.com and clicking "Start Free" and follow the instructions there
- Clone this repo to your local machine
- in the terminal navigate to the directory using `cd <surf-app>`
- create a .env file and make two variables `MONGO_USER` and `MONGO_PSWD` and assign your username and password to the variables
- start the server by navigating into the server directory `cd server` then `npm start`
- in a separate terminal start the frontend by navigating into the client directory `cd client` and then `npm start`
