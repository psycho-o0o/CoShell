import { Schema } from "mongoose"

export interface IUserProps {
    name: string
    email: string
    birth?: string
    password: string
}

const UserSchema = new Schema<IUserProps>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
    },
    birth: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
})

export default UserSchema
