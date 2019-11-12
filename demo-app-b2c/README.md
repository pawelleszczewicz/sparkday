# DemoApp

Very simple app to demonstrate how to accuire token and use it to make rest calls to b2c api.

# How to start

create app in dev portal (on preprod env)

app should contain Account Information (US) B2C api

and it should have http://localhost:3000/login/callback as reply url

open app details and generate secret key for B2C channel type

copy Client ID and Key



clone this repo

perform `npm install`

paste Client ID and Key into .env file

perform `npm run start:server`

open browser and navigate to http://localhost:3000
