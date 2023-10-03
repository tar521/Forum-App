import mongoose from 'mongoose';
const { Schema } = mongoose;

export const Roles = {
    User: "ROLE_USER",
    Admin: "ROLE_ADMIN"
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => validator.isEmail(value)
    },
    password: String,
    // role: Roles
}, )

const user = mongoose.model('user', userSchema);

export default user;
