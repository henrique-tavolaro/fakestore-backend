
import { NextFunction } from "express";
import { HttpResponse } from "./http";

export interface Controller<T = any> {
    handle(request: T, next: NextFunction): Promise<HttpResponse | undefined>
}