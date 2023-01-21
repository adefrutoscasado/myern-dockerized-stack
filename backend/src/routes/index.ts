import { Router } from 'express'
import heartbeat from './heartbeat'

const router = Router({ mergeParams: true })

router.use(heartbeat)

export default router