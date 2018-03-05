># LAB 33: Budget Tracker Continued

Using react and redux, create a simple app to categorize and track expenses.  Utilize Redux development tools and middleware for logging.

>## Install

```BASH
    npm i
```


```BASH
    npm run build
```

```BASH
    npm run watch
```


### Dependencies 

- This project has the following dependencies:

```JSON
"devDependencies": {
    "babel-core": "^6.26.0",
    "babel-eslint": "^8.2.2",
    "babel-jest": "^22.4.1",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "eslint": "^4.18.1",
    "eslint-plugin-react": "^7.7.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^22.4.2",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "redux-devtools-extension": "^2.13.2",
    "sass-loader": "^6.0.6",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  }
```

### npm scripts

- The following npm scripts are available:

```JSON
  "scripts": {
    "lint": "eslint .",
    "build": "webpack",
    "watch": "webpack-dev-server --inline --hot",
    "test": "jest --verbose -i",
    "test:debug": "DEBUG=http* jest --verbose -i"
  }
```

### Usage

This is basic example of a react application combined with a redux store using two reducers.  The application allows the user to to generate a list of budget categories and then add a list of expenses to to each category.  There are methods for updating and deleting categories as well as expenses.  If a category is deleted, all the expenses are deleted a well.  Currently this is a demo application with no persistance beyond the session.  State is reset on page load.

### Application State

Application state is managed through the use of Redux and two reducers.  State is represented by an object with two top level properties, categories and expenses.  Categories is an array of category objects and expenses is an object of category ids as properties with a values of arrays of expense objects.

```JSON
{
  "expenses":{
    "d0fc9ad6-051f-4231-b148-26909149ff9f":[
      {
        "name":"Gas",
        "amount":"90.00",
        "category_id":"d0fc9ad6-051f-4231-b148-26909149ff9f",
        "id":"035e4f96-efa3-4eba-a267-66b8beb55e44",
        "timeStamp":"2018-03-05T07:20:53.878Z"
      },
      {
        "name":"Insurance",
        "amount":"110.00",
        "category_id":"d0fc9ad6-051f-4231-b148-26909149ff9f",
        "id":"da4e4b3d-e5df-43f0-a158-cbe381131cd1",
        "timeStamp":"2018-03-05T07:21:52.708Z"
      }
    ],
    "dd9d48c6-2cdd-41ab-bae1-7c46ee86ab33":[
      {
        "name":"Electric",
        "amount":"75.00",
        "category_id":"dd9d48c6-2cdd-41ab-bae1-7c46ee86ab33",
        "id":"8a2abbb3-37e2-4102-b59f-8e6d71469d19",
        "timeStamp":"2018-03-05T07:30:49.658Z"
      },
      {
        "name":"Internet",
        "amount":"79.00",
        "category_id":"dd9d48c6-2cdd-41ab-bae1-7c46ee86ab33",
        "id":"8d31543a-e541-4f50-bf72-71988d8543e9",
        "timeStamp":"2018-03-05T07:31:16.244Z"
      }
    ]
  },
  "categories":[
    {
      "name":"Car",
      "amount":"225.00",
      "id":"d0fc9ad6-051f-4231-b148-26909149ff9f",
      "timeStamp":"2018-03-05T07:20:20.421Z"
    },
    {
      "name":"Home",
      "amount":"300.00",
      "id":"dd9d48c6-2cdd-41ab-bae1-7c46ee86ab33",
      "timeStamp":"2018-03-05T07:30:18.005Z"
    }
  ]
}
```
