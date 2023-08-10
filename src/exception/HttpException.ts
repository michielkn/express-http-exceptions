
type HttpExceptionDataHeader = {
    name: string,
    value: number | string | ReadonlyArray<string>
}

type HttpExceptionData = {
    message?: string                        // This string that becomes the response message
    body?: unknown                          // This will become the body
    headers?: HttpExceptionDataHeader[]    // A list of headers that should be set
}

export default class HttpException {
    statusCode: number;
    data: HttpExceptionData;

    constructor(statusCode: number, data?: HttpExceptionData) {
        this.statusCode = statusCode;
        this.data = data || {};
    }
}