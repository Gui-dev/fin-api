type AccountDTO = {
  id: string
  name: string
  cpf: string
  statement?: string[]
}

export class AccountService {
  public customers: Array<AccountDTO>

  constructor () {
    this.customers = [{
      id: 'ef6f2b81-f2ca-44b5-b914-59d40d8dfd57',
      name: 'Clark Kent',
      cpf: '98754326787',
      statement: []
    }]
  }

  public async createAccount (data: AccountDTO): Promise<AccountDTO[]> {
    const customerAlreadyExists = this.customers.some(customer => customer.cpf === data.cpf)

    if (customerAlreadyExists) {
      throw new Error('Customer already exists')
    }

    this.customers.push(data)

    return this.customers
  }

  public async listAllAccounts (): Promise<AccountDTO[]> {
    console.log(this.customers)
    return this.customers
  }

  public async listByCpf (cpf: string): Promise<AccountDTO> {
    const customer = this.customers.find(customer => customer.cpf === cpf)

    if (!customer) {
      throw new Error('Customer not found')
    }

    return customer
  }
}