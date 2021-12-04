import model from '../models/admins.js'
import jwt from '../../lib/jwt.js'

export default {
    get: async (req, res) => {

        try {

            let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if((status == "super" || status == 'admin') && admin_id){

                let data = await model.get()

                if (data.length) {

                    res.json({
                        status: 200,
                        message:"OK",
                        data
                    })

                }else{

                    res.json({
                        status: 204,
                        message: 'No Content'
                    })

                }
                
            }else{

                res.json({
                    status: 404,
                    message: 'Not Found',
                })

            }    

        } catch (error) {
            console.log(error)
        }
        res.end()
    },
    post: async (req, res) => {
        try {
          
            let status = jwt.verify(req.cookies.status)
            let admin_id = jwt.verify(req.cookies.admin_id)

            if (status == 'super' && admin_id) {

                let data = await model.post(req.body)

                if (data.length) {

                    res.json({
                        status: 200,
                        message: 'OK',
                        data
                    })

                }else{

                    res.json({
                        status: 204,
                        message: 'No Content'
                    })
    
                }

            }else{

                res.json({
                    status: 404,
                    message: 'Not Found',
                })

            }

        }catch(error) {
            console.log(error)
        }
        res.end()
    },
    put: async (req, res) => {
        try {

            let status = jwt.verify(req.cookies.status)
            let admin_id = jwt.verify(req.cookies.admin_id)

            if (status == 'super' && admin_id) {

                let data = await model.put(req.body)

                if (data.length) {

                    res.json({
                        status: 200,
                        message: 'OK',
                        data
                    })

                }else{

                    res.json({
                        status: 204,
                        message: 'No Content'
                    })

                }

            }else{

                res.json({
                    status: 404,
                    message: 'Not Found',
                })

            }

        } catch (error) {
            console.log(error)
        }
        res.end()
    },
    delete: async (req, res) => {

        try {

            let status = jwt.verify(req.cookies.status)
            let admin_id = jwt.verify(req.cookies.admin_id)
          
            if (status == 'super' && admin_id) {

                let data = await model.delete(req.body)

                if (data.length) {

                    res.json({
                        status: 200,
                        message: 'OK',
                        data
                    })

                }else{

                    res.json({
                        status: 204,
                        message: 'No Content'
                    })

                }

            }else{

                res.json({
                    status: 404,
                    message: 'Not Found',
                })

            }

        } catch (error) {
            console.log(error)
        }
        res.end()
    },
    login: async (req, res) => {

        try {

            let data = await model.login(req.body)
            let token = jwt.sign(data[0].admin_id)
            let status = jwt.sign(data[0].status)

            if (data.length) {

                res.cookie('admin_id', token)
                res.cookie('status', status)

                res.json({
                    status: 200,
                    message: 'OK',
                    data
                })

            }else{

                res.json({
                    status: 204,
                    message: 'No Content'
                })

            }

        } catch (error) {
            console.log(error)
        }
        res.end()
    }
}