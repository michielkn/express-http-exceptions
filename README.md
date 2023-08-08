# Express HTTP Exceptions

## Description
This is a simple module that adds the functionality to throw an Exception in your express application that gets
converted to an HTTP Response

## Installation
```shell
    yarn add @michielkn/express-http-exceptions
```

## Setup
```javascript
    import { HttpExceptionMiddleware } from '@michielkn/express-http-exceptions'    // import the express middleware
    import express from 'express';                                                  // import express
    const app = express();
    
    // add your own code here
    
    app.use(HttpExceptionMiddleware); // add the middleware after your custom code


    app.listen(3000, () => { // Start the app
        console.log(`App listening on port 3000`);
    });
```

## Usage
Throw an Exception in your express application
```javascript
    import { HttpException } from '@michielkn/express-http-exceptions' // import the HttpException class

    throw New HttpException(404); // Will return a http response with code 404
    
    // or

    throw New HttpException(404, {message: 'custom message'}); // Will return a 404 with a custom message

    // or

    throw New HttpException(404, {body: {field: "Some custom body"}}); // Will return a 404 with a custom body
```
