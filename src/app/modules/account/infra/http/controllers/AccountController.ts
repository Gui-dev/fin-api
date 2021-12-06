import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

import { AccountService } from '@modules/account/services/AccountService'

export class AccountController {
  public async create (request: Request, response: Response) {
    const { name, cpf } = request.body
    const accountService = new AccountService()

    const data = {
      id: uuid(),
      name,
      cpf
    }
    const result = await accountService.createAccount(data)

    return response.status(201).json(result)
  }
}
