# express-practice
setting up basic node.js server with express

## Commands to initialize

### Set up initial folder run npm init
  1. Create folder `mkdir myFolder`
  2. Go into the folder `cd myFolder`
  3. Check for node `node -v`
  4. Install node if needed [Node.js](https://nodejs.org/en/)
  5. run `npm install` Choose a name/author/description
  6. Change the index.js option to server.js
  7. Create server.js file `touch server.js`
  8. Install nodemon to update server without needed to stop/start `npm install -g nodemon`
  9. Install express for this server `npm install express --save`
## Configure express and routes
  1. Require express, create the app, and assign a listening port 
      ```js
	  var express = require('express');
      var app = express();
      var port = 3000;

      app.listen(port, function(){
         console.log('Express app listening on port ' + port);
     });
	 ```
   2. Create route handler for site root
		```js
		app.get('/', function(request, response){
			response.send('Hello, World!');
		});
		```
## Start the server
1. run `node server.js` to start the server
2. Check in a browser that localhost:3000 shows a hello world screen

## Add middleware for POST routes
1. run `npm install --save body-parser`
2. add to server.js `var bodyParser = require('body-parser');` and after require statements `app.use(bodyParser.urlencoded({ extended: true }));`

## Add SQLlite for persistent data
1. Install SQLite AND TOOLS on your machine(C:/sqlite3 is preferred location), [SQLite](https://www.sqlite.org/download.html)
2. Add C:\sqlite3 to your PATH environment variable 
3. for Windows open Advanced System Settings and click on Environment Variables
4. choose Path and edit
5. add new and add the path to the .exe file  C:/sqlite3 
6. run `npm install sqlite3 --save`
7. require in server.js `var sqlite3 = require('sqlite3');`
8. create a database in server.js file `var db = new sqlite3.Database('myDatabase.db');`

## Testing Routes with postman
1. download/install [Postman](https://www.getpostman.com/apps)
2. goto the new request window and choose GET from the dropdown
3. add a url to test localhost:3000/quotes/2
4. press send and check the response


