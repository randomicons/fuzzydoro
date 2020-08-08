import {Router} from "express"
import {createTask, getTasks} from "../services/task.service";
import {handleError} from "../util/errorHandling";
import {Request, Task} from "../types";

export const taskRoutes = Router()

taskRoutes.get("/", async (req: any, res) => {
  try {
    res.json(await getTasks(req.user.email))
  } catch (e) {
    handleError(e)
    res.sendStatus(500)
  }
})

taskRoutes.post("/", async (req: Request<Task>, res) => {
  console.log((req as any).user)
  try {
    res.json(await createTask((req as any).user.email, req.body))
  } catch (e) {
    handleError(e)
    res.sendStatus(500)
  }
})

