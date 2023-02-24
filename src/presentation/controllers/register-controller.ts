import { NextFunction } from "express";
import { IAuthRepository } from "../../infra/repositories/auth-repository";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";



export class Register implements Controller {
    constructor(
        private repository: IAuthRepository
    ) { }

    async handle(
        request: RegisterController.Request,
        next: NextFunction
    ): Promise<HttpResponse | undefined> {
        try {

            await this.repository.register({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            })

            return {
                statusCode: 200,
                data: { "message": "Usuário criado com sucesso" }
            }
        } catch (e) {
            next(e)
        }
    }

}

export namespace RegisterController {
    export type Request = {
        body: {
            name: string,
            email: string,
            password: string
        }
    }
}
