import model from '../models/languages.js'
import jwt from '../../lib/jwt.js'

export default {

	get: async (req, res) => {
		try {

			let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if((status == "super" || status == 'admin') && admin_id){

				let data = await model.get()

				if (data){

					res.json({ 
						status: 200,
						message:'OK',
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

		}catch(error){
			console.log(error)
		}
		res.end()
	},
	post: async (req, res) => {
		try {

			let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if((status == "super" || status == 'admin') && admin_id){

				let data = await model.post(req.body)

				if (data){

					res.json({ 
						status: 200,
						message:'OK',
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

		}catch(error){
			console.log(error)
		}
		res.end()
	},
	put: async (req, res) => {
		try {

			let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if((status == "super" || status == 'admin') && admin_id){

				let data = await model.put(req.body)

				if (data){

					res.json({ 
						status: 200,
						message:'OK',
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

		}catch(error){
			console.log(error)
		}
		res.end()
	},
	delete: async (req, res) => {
		try {

			let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if((status == "super" || status == 'admin') && admin_id){

				let data = await model.delete(req.body)

				if (data){

					res.json({ 
						status: 200,
						message:'OK',
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

		}catch(error){
			console.log(error)
		}
		res.end()
	}
	
}
