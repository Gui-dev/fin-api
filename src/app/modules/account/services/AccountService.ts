type AccountDTO = {
  id: string
  name: string
  cpf: string
  statement?: string[]
}

export class AccountService {
  public async createAccount (data: AccountDTO): Promise<AccountDTO[]> {
    const customers = []
    customers.push(data)

    return customers
  }
}
