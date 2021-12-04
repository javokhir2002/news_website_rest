import controller from '../controllers/users.js'
import express from 'express'

const router = express.Router()

router.get('/users', controller.get)
      .post('/users', controller.post)
      .put('/users', controller.put)
      .delete('/users', controller.delete)
      .post('/userLogin', controller.login)
      
export default router