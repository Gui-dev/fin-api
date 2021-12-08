import { Router } from 'express'

import { AccountController } from '@modules/account/infra/http/controllers/AccountController'
import { DespositController } from '@modules/account/infra/http/controllers/DepositController'
import { WithDrawController } from '@modules/account/infra/http/controllers/WithDrawController'

const routesAccount = Router()

const accountController = new AccountController()
const despositController = new DespositController()
const withDrawController = new WithDrawController()

routesAccount.get('/', accountController.index)
routesAccount.get('/statement', accountController.show)

routesAccount.post('/', accountController.create)
routesAccount.post('/deposit', despositController.create)
routesAccount.post('/withdraw', withDrawController.create)

export {
  routesAccount
}
