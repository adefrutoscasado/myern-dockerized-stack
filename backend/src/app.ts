import express, { NextFunction, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import knex from 'knex'
import cors from 'cors'
import { errorHandler } from './utils'
import { NotFoundError } from './errors'
import { PRODUCTION, JWT_SECRET, REFRESH_JWT_SECRET } from './constants'
import routes from './routes'
import { databaseConfig } from './config'
import HTTP_CODE from './errors/httpCodes'

// Environment execution info
console.log(`Running in ${PRODUCTION ? 'PRODUCTION' : 'DEVELOPMENT'} mode\n`)

// Test database connection
const knexConnection = knex(databaseConfig)
knexConnection.raw(`
SHOW TABLES;
`)
  .then((data) => {
    console.log(data[0])
    console.log('\nDatabase connection successful\n')
  })
  .catch((error) => {
    console.error('\nDatabase connection error')
    console.error(error)
  })

// Start express app
const app = express()

app.set('JWT_SECRET', JWT_SECRET)
app.set('REFRESH_JWT_SECRET', REFRESH_JWT_SECRET)

export const API_PREFIX = '/api'

app.disable('x-powered-by')
app.use(logger('dev')) // TODO: Add body
app.use(cors()) // TODO: Set for development, review for prod
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', routes)

// 404 Not Found Errors
app.use(errorHandler((req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundError('Endpoint not Found')
}))

interface ExpressError {
  status?: number
  message?: Error['message']
  stack?: Error['stack']
  errors?: any
  additionalInfo?: any
}

// 500 Internal Errors
app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  console.log(err.stack)
  res.status(err.status || HTTP_CODE.INTERNAL_ERROR)
  res.json({
    message: (err.status === undefined && PRODUCTION) ? 'Internal error' : err.message,
    errors: err.errors,
    ...(err.additionalInfo || {}),
  })
})

export default app
