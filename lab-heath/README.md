# LAB 33: Budget Tracker Continued

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and after that, you will neex to install all the dependencies. do this by typing in `npm i`. 

next you need to have these scripts adjusted in your package.json file.

```javascript
"scripts": {
    "test": "jest --verbose",
    "test:watch": "jest --watchAll",
    "build": "webpack",
    "watch": "webpack-dev-server --inline --hot"
  },
  ```

from there, you can go to your terminal and type, 

```javascript
node run build
```
this will build out a it builds the app by packaging it all up into a simple file for us to use later on.

to get a preview of your app. you need to run this command also.

```javascript
node run watch
```
once you have done that. you can go to your localhost:8080 and see your project in the browser.

---
## How to use

you have 2 input boxes that will take in a strings. this is a `title` and a `price`. you will have a button below that will submit the data into the app that will return an list item that will have the title, data made, and price.

you have a input area for a expense that you can enter in a title of a expense and a value of it. it will then create an new item that goes inside of that catagory. here you can a few different expense that will take away from the grand total of the catagory.

--- 
## new Middleware

we have added 2 new middleware to our app. one is a reporter that logs the `DISPATCHING` type and the `NEXT STATE`. this lets us see what action was done and what is our state.

the second one is a local-storage builder. as we enter new items, it store it to localStorage. When we reload the page, we build a new file in the lib folder that takes localStorage and rebuilds it into a object that we then pass into the createStore function. this then lets us have our items we build come back until we delete them. at that point. it will be gone forever.

### Updating data
double clicking on the grey box of the category or the dark grey of the expense will open up that item so you can update the item.
--- 

### delete button
Just hit the delete button on either of the category or the expense it will remove that item from storage.

## test...

we have done testing for the 

* category-action file
* category-form file
* category-reducer file
* expense-action file
* expense-form file
* dashboard file




