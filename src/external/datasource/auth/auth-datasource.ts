
import { decrypt } from "../../../core/helpers/decrypt";
import UserModel from "../../../domain/model/user-model";
import { User } from "../../schema-models/user";
import { IAuthDatasource, Login, Register } from "./i-auth-datasource";

export default class AuthDatasource implements IAuthDatasource {

    async login({ email, password }: Login.Params): Promise<UserModel> {
        try {
            const user = await User.findOne({ email }).select('+password')

            if (!user) {
                throw new Error('User not found')
            }

            if (!await decrypt(password, user.password)) {
                throw new Error('Invalid password')
            }

            user.password = ''

            return user as UserModel
        } catch (e) {
            throw e
        }
    }

    async register({ name, email, password }: Register.Params): Promise<void> {
        try {

            if (await User.findOne({ email })) {
                throw new Error('User already exists')
            }

            const user = await User.create({ name, email, password })

            if (!user) {
                throw new Error('Error creating user')
            }

            return
        } catch (e) {
            // console.log(e);
            throw e
        }
    }

}