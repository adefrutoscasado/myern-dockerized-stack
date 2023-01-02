import { Request, Response } from 'express'

export const errorHandler = (fn: (req: Request, res: Response, next: any, ...args: any) => Promise<any>) =>
  function asyncUtilWrap(req: Request, res: Response, next: any, ...args: any) {
    // @ts-ignore
    const fnReturn = fn(req, res, next, ...args)
    return Promise.resolve(fnReturn).catch(next)
  }
