import controller from '../controllers/categories.js'
import express from 'express'

const router = express.Router()

router.route('/categories')
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.delete)
        
export default router