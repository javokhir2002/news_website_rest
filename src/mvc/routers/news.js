import controller from '../controllers/news.js'
import express from 'express'


const router = express.Router()

router.get('/categories/news',controller.get)
      .post('/categories/news',controller.post)
      .put('/categories/news',controller.put)
      .delete('/categories/news',controller.delete)
        

export default router