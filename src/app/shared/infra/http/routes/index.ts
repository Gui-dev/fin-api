import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ res: 'Hello World' })
})

export {
  routes
}