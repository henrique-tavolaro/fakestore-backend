import { NextFunction, Request } from "express";
import { IAuthRepository } from "../../infra/repositories/auth-repository";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";


export class Login implements Controller {

    constructor(
        private repository: IAuthRepository
    ) { }

    async handle(request: LoginController.Request, next: NextFunction): Promise<HttpResponse | undefined> {
        try {
            const result = await this.repository.login({
                email: request.body.email,
                password: request.body.password
            })

            return {
                statusCode: 200,
                data: result
            }
        } catch (e) {
            next(e)
        }
    }

}

export namespace LoginController {
    export type Request = {
        body: {
            email: string,
            password: string
        }
    }
}
