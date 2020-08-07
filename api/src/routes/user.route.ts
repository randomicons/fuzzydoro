import {Router} from "express"
import * as userService from "../services/user.service"
import {LOGIN_TOKEN} from "../constants"
import {AppError, handleError} from "../util/errorHandling"
import {HttpCode} from "../constants/httpCode"
import {Request, User} from "../types";

const userRoutes = Router()
export default userRoutes

userRoutes.post("/login", async (req: Request<{email: string, password: string}>, res) => {
  try {
    const out = await userService.login(req.body.email, req.body.password)
    res.cookie(LOGIN_TOKEN, out.token, {maxAge: out.maxAge})
    res.send("Logged In")
  } catch (e) {
    handleError(e)
    if (e instanceof AppError)
      res.status(e.httpCode).send(e)
    else
      res.status(HttpCode.SERVER_ERROR).send(e)
  }
})

userRoutes.post("/signup", async (req: Request<User>, res) => {
  try {
    //Todo verif all this is correct (use joi probably)
    const out = await userService.signup(
      req.body.email,
      req.body.password
    )
    res.cookie(LOGIN_TOKEN, out.token, {maxAge: out.maxAge})
    res.send("Logged In")
  } catch (e) {
    handleError(e)
    if (e instanceof AppError)
      res.status(e.httpCode).send(e)
    else
      res.status(HttpCode.SERVER_ERROR).send(e)
  }
})
