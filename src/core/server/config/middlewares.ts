import { cors } from '../middlewares/cors'
import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'

export default (app: Express): void => {
    app.use(cors)
    app.use(bodyParser)
}