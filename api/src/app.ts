import express, {Response} from 'express'
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

import {router as testAPIRouter} from './routes/testAPI'

const app = express();

import {Request} from './types'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/testAPI', testAPIRouter)

// error handler
app.use(function(err: any, req: Request<null>, res: Response, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(9000, () => console.log('Finished booting'))

export {app};
