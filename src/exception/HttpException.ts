
type HttpExceptionData = {
    message?: string
    body?: unknown
}

export default class HttpException {
    statusCode: number;
    data: HttpExceptionData;

    constructor(statusCode: number, data?: HttpExceptionData) {
        this.statusCode = statusCode;
        this.data = data || {};
    }
}