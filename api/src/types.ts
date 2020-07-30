import express from 'express'

// params, resultBody, requestBody, queryParams
export type Request<Body> = express.Request<any, any, Body, any>
