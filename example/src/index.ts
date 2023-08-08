import {
    HttpException,
    HttpExceptionMiddleware,
    HttpStatusCodes,
    SuccessHttpStatusCodes,
} from '@michielkn/express-http-exceptions';
import express from 'express';
const app = express();
const port = 3000;

app.get('/404', () => {
    throw new HttpException(404);
});

app.get('/404-with-message', () => {
    throw new HttpException(404, { message: 'This is a custom message', });
});

app.get('/500', () => {
    throw new HttpException(HttpStatusCodes.INTERNAL_SERVER_ERROR);
});

app.get('/202', () => {
    throw new HttpException(SuccessHttpStatusCodes.ACCEPTED);
});

app.get('/500-with-body', () => {
    throw new HttpException(500, { body: { data: 'Some random data', }, });
});

app.use(HttpExceptionMiddleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});