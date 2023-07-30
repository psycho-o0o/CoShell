import bcrypt from "bcrypt"

const makeHashPassword = (password: string) => {
    const hashedPassword = bcrypt.hashSync(password, process.env.SALT as string)

    return hashedPassword
}

const comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword)
}

export { makeHashPassword, comparePassword }
