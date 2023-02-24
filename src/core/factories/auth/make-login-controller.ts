import AuthDatasource from "../../../external/datasource/auth/auth-datasource";
import AuthRepository from "../../../infra/repositories/auth-repository";
import { Login } from "../../../presentation/controllers/login-controller";


export const makeLoginController = (): Login => {
    const datasource = new AuthDatasource()
    const repository = new AuthRepository(datasource)
    return new Login(repository)

}