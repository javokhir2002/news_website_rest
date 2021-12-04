import controller from '../controllers/coments.js'
import express from 'express'

const router = express.Router()

router.route('/coments')
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.delete)
        
export default router