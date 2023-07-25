import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    data: Date,
    id: String,
    role:String,
    verified:Boolean,
    typeOfMarketing:String,
});

const User = models.users || model("users", userSchema);
export default User;
