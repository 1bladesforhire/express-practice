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
