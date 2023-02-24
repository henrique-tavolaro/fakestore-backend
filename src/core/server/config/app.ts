import express from 'express'
import setupMiddlewares from './middlewares'
import setupAuthRoutes from '../routes/auth-routes'

const app = express()
app.use(express.json())
// setupMiddlewares(app)
setupAuthRoutes(app)
export default app

