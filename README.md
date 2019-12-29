# Search Tool
This is a tool that let user be able to search data efficiently with keywords and tags.

## Features
1. /api/comments
2. /api/tags

## Get started
#### Prerequisites/Environment
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "faker": "^4.1.0",
    "method-override": "^3.0.0",
    "nodemon": "^2.0.2",
    "pg": "^7.16.1",
    "sequelize": "^5.21.3",
    "sequelize-cli": "^5.5.1",
    "swagger-jsdoc": "^3.5.0",
    "swagger-ui-express": "^4.1.2"

#### Setup the app
1. Clone the repo
```
$ git clone git@github.com:tsungtingdu/search-tool.git
```
2. Go to the project folder
```
$ cd search-tool 
```
3. Install npm packages
```
$ npm i 
```
4. Install Postgres
5. Create database "search_tool"
```
$ postgres=# CREATE DATABASE search_tool
```
6. Edit config.json
```
// /config/config.json

// ...
  "development": {
    "username": [YOUR_USER_NAME],
    "password": null,
    "database": "search_tool",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
// ...
```
7. Run db migrate and add seed data
```
$ npx sequelize db:migrate
$ npx sequelize db:seed:all
```
8. run the app
```
$ npm run dev
```

## Authors
* [Andy](https://github.com/andy922200)
* [Gary]()
* [Tim](https://github.com/tsungtingdu)

