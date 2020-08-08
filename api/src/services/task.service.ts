import {Task} from "../types";
import {TaskModel} from "../models/Task.model";
import {AppError} from "../util/errorHandling";
import {HttpCode} from "../constants/httpCode";

export const createTask = async (email: string, task: Task) => {
  try {
    await TaskModel.create({email, ...task})
  } catch (e) {
    throw new AppError("DB error", HttpCode.BAD_REQUEST, e.stack)
  }
}

export const getTasks = (email: string) => {
  try {
    return TaskModel.find({email})
  } catch (e) {
    throw new AppError("DB error", HttpCode.BAD_REQUEST, e.stack)
  }
}