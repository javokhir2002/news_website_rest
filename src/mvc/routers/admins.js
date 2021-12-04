import controller from '../controllers/admins.js'
import express from 'express'

const router = express.Router()

router.get('/admins', controller.get)
      .post('/admins', controller.post)
      .put('/admins', controller.put)
      .delete('/admins', controller.delete)
      .post('/adminLogin', controller.login)
      
export default router