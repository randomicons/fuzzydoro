import express from 'express'

// params, resultBody, requestBody, queryParams
export type Request<Body> = express.Request<any, any, Body, any>

export type User = {email: string, password: string}

export type Task = {
  duration: Number
  name: string
  startTime: Date
}