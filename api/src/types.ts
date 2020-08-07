import express from 'express'

// params, resultBody, requestBody, queryParams
export type Request<Body> = express.Request<any, any, Body, any>

export type User = {email: string, password: string}
