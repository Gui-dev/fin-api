import { Router } from 'express'

import { AccountController } from '@modules/account/infra/http/controllers/AccountController'

const routesAccount = Router()

const accountController = new AccountController()

routesAccount.get('/', accountController.index)
routesAccount.get('/statement', accountController.show)
routesAccount.post('/', accountController.create)

export {
  routesAccount
}
