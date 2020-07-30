import express, {Response} from 'express'
export const router = express.Router()

import {Request} from '../types'

router.get('/', function(req: Request<null>, res: express.Response, next: any) {
    res.send('API is working properly')
})
