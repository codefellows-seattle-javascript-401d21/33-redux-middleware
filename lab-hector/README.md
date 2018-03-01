![cf](http://i.imgur.com/7v5ASc8.png) 31: Budget Tracker
===

##How to use this app:
- Fork this repo
- Clone to your local machine
- Run ```npm i``` to install dependencies

Once the dev-dependencies are installed
- Open the terminal and run ```npm run watch```
- Once it compiles, it will give you an http link for the server
- Open your browser and go to that http address
- You should now see two inputs. One for Category Name and one for Quantity
- Click on the create button to create your list
- Double click to update.
- Click Delete to delete category

# How it works:
We created a category reducer in the reducer directory.
This reducer supports the following interactions
```CATEGORY_CREATE```

```CATEGORY_UPDATE```
```CATEGORY_DESTORY```

We exported a function that will return a new redux store:
```export default () => createStore(reducer);```