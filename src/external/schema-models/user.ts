import { encrypt } from "../../core/helpers/encrypt";
import { mongoose } from "../../core/services/database/mongoose";


const UserSchema =
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        deletedAt: {
            type: Date,
            default: null
        }
    })

UserSchema.pre('save', async function (next) {
    const hash = await encrypt(this.password);
    this.password = hash;

    next();
})

export const User = mongoose.model(
    "User",
    UserSchema
)


