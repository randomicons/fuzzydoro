import mongoose, {Document, Schema} from "mongoose"
import {Task} from "../types"

type ITask = {email: string} & Document & Task
const Task = new Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  startTime: {type: Date, required: true},
  duration: {type: Number, required: true}
})

//TODO make autoindex false on prod?
Task.index({email: 1, startTime: -1})

export const TaskModel = mongoose.model<ITask>("Task", Task)