import controller from '../controllers/languages.js'
import express from 'express'

const router = express.Router()

router.route('/languages')
        .get(controller.get)
        .put(controller.put)
        .post(controller.post)
        .delete(controller.delete)
        
export default router