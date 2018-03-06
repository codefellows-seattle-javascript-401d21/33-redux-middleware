# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

**INSTALL SEPERATELY IN EACH SUB DIRECTORY (back-end/lab-jeremy and front-end/lab-jeremy)** 

_Libraries (BACK END)_: 

    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "express": "^4.16.2",
    "mongoose": "^5.0.2"
    "debug": "^3.1.0",
    "dotenv": "^5.0.0",
    "eslint": "^4.16.0",
    "faker": "^4.1.0",
    "jest": "^22.1.4",
    "superagent": "^3.8.2"

_Libraries (FRONT END)_: 

    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.4.2",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "redux-devtools-extension": "^2.13.2",
    "sass-loader": "^6.0.6",
    "superagent": "^3.8.2",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"

_Last modified_: 3/5/2018

# App use

## Getting the app going

1. Install project directory
2. Create .env file in back-end/lab-jeremy directory with the following code:
```
PORT=3000
MONGODB_URI='mongodb://localhost/league'
```
3. Create a new .dev.env file in the front-end/lab-jeremy directory with the following code:
```
NODE_ENV="dev"
API_URL="http://localhost:3000"
CDN_URL="/"
```
4. run the following lines of code in both front-end/lab-jeremy and back-end/lab-jeremy directories:
```
npm i
```
5. Ensure you have mongodb running by typing mongo in your terminal to access the shell. 
5. Open 3 terminal tabs
6. On the first tab navigate to back-end/lab-jeremy and type the following to start the server:
```
nodemon index.js
```
_Note: it should tell you it's listening on port 3000_
7. Add some champs/seasons to your database. Examples (Note you will need HTTPie for this type of call):
```
http POST :3000/api/v1/season name="season 1"
http POST :3000/api/v1/champ name="lux" type="mage" main_lane="mid" winrate_percent="55" season=[_id from previous generated object]
```
_Note: you can change the season name and all other parameters, however you need to make sure the season param matches the ID from the generated object in mongoDB_
8. Once you have information in your mongoDB you can navigate to front-end/lab-jeremy and use the following to build your webpack to generate the information on home ("localhost:8080/") route:
```
npm run watch
```

You should see something similar to (depending what you added to the db): 

```
Hello world - League of Legends things

season 1
```

# Lab Readme (SPECS)

![cf](http://i.imgur.com/7v5ASc8.png) 36: Async Actions
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas

## Requirements
#### Configuration

##### back-end/
* copy your lab-14 or comparable api into into a back-end directory

##### frontend/
* **README.md** -- with documentation about your lab
* **.babelrc** -- with all dependencies and dev-dependencies
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust .gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.lock** -- with the npm lockfile
* **package.json** -- with all dependencies and dev-dependencies
* **webpack.config.js** -- with webpack config
* **src/** -- containing the frontend code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset
* **src/style/_base.scss** -- base styles
* **src/style/_layout.scss** -- layout styles

#### Feature Tasks
  * Create a frontend for your lab-14-two-resource-api or week 5 project
  * You can also choose to use a comparable RESTful api that does not have auth (must permit full CRUD)
  * Use react/redux best practices
  * Add validation in your redux routers
  * Add reporter and thunk middleware to your redux store
  * make async action creators for making ajax request to your back-end
  * make sync action creators from updating your app store

#### Test
  * Test your redux reducers
  * Test your util methods

#### Documentation
Write a description of the project in your README.md