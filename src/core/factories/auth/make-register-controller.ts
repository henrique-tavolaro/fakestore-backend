import AuthDatasource from "../../../external/datasource/auth/auth-datasource";
import AuthRepository from "../../../infra/repositories/auth-repository";
import { Register } from "../../../presentation/controllers/register-controller";


export const makeRegisterController = (): Register => {
    const datasource = new AuthDatasource()
    const repository = new AuthRepository(datasource)
    return new Register(repository)
}