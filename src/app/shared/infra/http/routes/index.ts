import { Router } from 'express'

import { routesAccount } from '@modules/account/infra/http/routes/account.routes'

const routes = Router()

routes.use('/accounts', routesAccount)

export {
  routes
}
