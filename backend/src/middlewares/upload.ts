import type { Request, Express } from 'express'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import { promisify } from 'util'
import { exec } from 'child_process'
import { BadRequestError } from '../errors'
const execute = promisify(exec)

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
  destination: async function (req: Request, file: Express.Multer.File, callback: DestinationCallback) {
    const ICONS_FOLDER = `${process.cwd()}/public/upload`
    try {
      await execute(`mkdir ${ICONS_FOLDER}`)
    } catch (err) {
      console.log(err)
    }
    callback(null, ICONS_FOLDER)
  },
  filename: function (req: Request, file: Express.Multer.File, callback: FileNameCallback) {
    const originalName = encodeURIComponent(path.parse(file.originalname).name).replace(/[^a-zA-Z0-9]/g, '')
    const timestamp = Date.now()
    const extension = path.extname(file.originalname).toLowerCase()
    callback(null, originalName + '_' + timestamp + extension)
  }
})

export const uploadIcon = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1 Mb
  fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg']
    if (!(acceptableExtensions.some(extension =>
      path.extname(file.originalname).toLowerCase() === `.${extension}`)
    )) {
      return callback(new BadRequestError(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(', ')}`))
    }
    callback(null, true)
  }
})

