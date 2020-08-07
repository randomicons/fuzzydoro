import {config} from "dotenv"
config()
import express, {Response} from 'express'
import {router as testAPIRouter} from './routes/testAPI'
import {Request} from './types'
import logger from "morgan"
import cookieParser from "cookie-parser"
import mongoose from 'mongoose'
import userRoutes from "./routes/user.route";
import {taskRoutes} from "./routes/task.route";
import {checkAuth} from "./middleware/checkAuth";

const mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB!, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/testAPI', testAPIRouter)
app.use('/user', userRoutes)
app.use('/task', checkAuth, taskRoutes)

// error handler
app.use(function (err: any, req: Request<null>, res: Response, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
})

app.listen(9000, () => console.log('Started on port 9000'))

export {app}
