import { Request, Response } from 'express'

import { AccountService } from '@modules/account/services/AccountService'

export class WithDrawController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers
    const { amount } = request.body
    const accountService = new AccountService()

    const customer = await accountService.withdraw(cpf as string, amount)

    return response.status(201).json(customer)
  }
}
