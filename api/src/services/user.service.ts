import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {AppError} from "../util/errorHandling"
import {HttpCode} from "../constants/httpCode"
import {User} from "../types"
import {UserModel} from "../models/User.model";

const saltRounds = 10

const genToken = (userInfo: User) => {
  const options = {expiresIn: 60 * 60 * 24 * 3}
  const {password, ...payload} = userInfo
  return {
    token: jwt.sign(payload, process.env.JWT_SECRET!, options),
    maxAge: options.expiresIn,
  }
}

export const login = async (email: string, password: string) => {
  let userInfo
  try {
    userInfo = await UserModel.findOne({email})
  } catch (e) {
    throw new AppError("db error", HttpCode.BAD_REQUEST, e.stack)
  }

  if (!userInfo) throw new AppError("email not found", HttpCode.UNAUTHORIZED)
  const match = await bcrypt.compare(password, userInfo.password)
  if (!match) {
    throw new AppError("Password incorrect", HttpCode.UNAUTHORIZED)
  }
  return genToken(userInfo)
}

export const signup = async (email: string, password: string) => {
  try {
    const existingUser = await UserModel.findOne({email})
    if (!existingUser) {
      await UserModel.create({email, password: await bcrypt.hash(password, saltRounds)})
      return genToken({email, password})
    }
  } catch (e) {
    throw new AppError("DB error", HttpCode.BAD_REQUEST, e.stack)
  }
  throw new AppError("user already exists", HttpCode.BAD_REQUEST)
}
