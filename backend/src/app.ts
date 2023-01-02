// @ts-ignore
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import { errorHandler } from './utils'
import { NotFoundError } from './errors'
import { PRODUCTION, JWT_SECRET, REFRESH_JWT_SECRET } from './constants'
import hearbeatRouter from './routes/heartbeat'

console.log(`Running in ${PRODUCTION ? 'PRODUCTION' : 'DEVELOPMENT'} mode`)

const app = express()

app.set('JWT_SECRET', JWT_SECRET)
app.set('REFRESH_JWT_SECRET', REFRESH_JWT_SECRET)

export const API_PREFIX = '/api'

app.disable('x-powered-by')
app.use(logger('dev'))
app.use(cors()) // TODO: Set for development, review for prod
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(hearbeatRouter)

// 404 Not Found Errors
app.use(errorHandler((req, res, next) => {
  throw new NotFoundError('Endpoint not Found')
}))

// 500 Internal Errors
// @ts-ignore
app.use((err, req, res, next) => {
  console.log(err.message)
  console.log(err.stack)
  res.status(err.status || 500)
  res.send({
    message: (err.status === undefined && PRODUCTION) ? 'Internal error' : err.message,
    errors: err.errors,
    ...(err.additionalInfo || {}),
  })
})

export default app