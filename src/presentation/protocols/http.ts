export interface HttpResponse<T = any> {
    statusCode: number;
    data: T;
    headers?: any
}

export interface HttpRequest<T = any> {
    data?: T;
    params?: T;
}
