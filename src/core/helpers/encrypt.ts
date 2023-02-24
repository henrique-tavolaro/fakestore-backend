import bcrypt from "bcryptjs"

export const encrypt = async (password: string) => {
    return await bcrypt.hash(password, 10)
}