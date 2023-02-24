
import bcrypt from 'bcryptjs'

export const decrypt = async (inputPassword: string, savedPassword: string) => {
    return await bcrypt.compare(inputPassword, savedPassword)
}