import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

import { AccountService } from '@modules/account/services/AccountService'

export class AccountController {
  public async index (request: Request, response: Response): Promise<Response> {
    const accountService = new AccountService()
    const accounts = await accountService.listAllAccounts()

    return response.status(201).json(accounts)
  }

  public async create (request: Request, response: Response): Promise<Response> {
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

  public async show (request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers
    const accountService = new AccountService()
    const customer = await accountService.listByCpf(cpf as string)

    return response.status(201).json(customer)
  }
}
