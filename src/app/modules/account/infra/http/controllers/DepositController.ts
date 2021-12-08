import { Request, Response } from 'express'

import { AccountService } from '@modules/account/services/AccountService'

export class DespositController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers
    const { description, amount } = request.body
    const accountService = new AccountService()

    const customer = await accountService.deposit(cpf as string, description, amount)

    return response.status(201).json(customer)
  }
}
