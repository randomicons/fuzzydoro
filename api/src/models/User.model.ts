import mongoose, {Document, Schema} from "mongoose"
import {User} from "../types";

type IUser = User & Document
const UserSchema = new Schema({
  email: {type: "String", required: true, unique: true},
  password: {type: "String", required: true}
})

export const UserModel = mongoose.model<IUser>('User', UserSchema)