import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Express): void => {
    const router = Router()
    app.use('/auth', router)
    readdirSync(join(__dirname, '../../../presentation/routes')).map(async file => {
        if (!file.endsWith('.map')) {
            (await import(`../../../presentation/routes/${file}`)).default(router)
            console.log(`[route]: using ${file}`)
        }
    })
}
