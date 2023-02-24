
import IUser from "../../domain/model/user-model";
import { Login, Register } from "../../external/datasource/auth/i-auth-datasource";
import UserModel from "../../domain/model/user-model";
import AuthDatasource from "../../external/datasource/auth/auth-datasource";

export interface IAuthRepository {
    login(params: Login.Params): Promise<IUser>
    register(params: Register.Params): Promise<void>
}

export default class AuthRepository implements IAuthRepository {

    constructor(
        private datasource: AuthDatasource
    ) { }

    async login(params: Login.Params): Promise<UserModel> {
        return await this.datasource.login(params);
    }

    async register(params: Register.Params): Promise<void> {

        return await this.datasource.register(params);
    }

}