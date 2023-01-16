import { Router, Request, Response } from 'express'
import { errorHandler } from '../utils'
const router = Router()

// TODO: manage api prefix
router.get('/api/heartbeat',
  errorHandler(async (req: Request, res: Response) => {
    return res.json({
      message: 'Message from backend, everything is ok!',
      env: process.env.NODE_ENV
    })
  })
)

export default router