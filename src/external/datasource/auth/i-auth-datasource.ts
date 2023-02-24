import UserModel from "../../../domain/model/user-model"

export interface IAuthDatasource {
    login(params: Login.Params): Promise<UserModel>
    register(params: Register.Params): Promise<void>
}

export namespace Login {
    export type Params = {
        email: string
        password: string
    }
}

export namespace Register {
    export type Params = {
        name: string
        email: string
        password: string
    }
}