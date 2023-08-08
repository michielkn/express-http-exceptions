import HttpException from '../exception/HttpException';
import { Request, Response, NextFunction, } from 'express';

export default function HttpExceptionMiddleware(error: unknown, request: Request, response: Response, next: NextFunction ) {
    if (error instanceof HttpException) {
        const { statusCode, data, } = error;
        const { message, body, } = data;
        response.status(statusCode);
        response.statusMessage = message;
        response.send(body);
    }
    if(next) {
        next();
    }
}