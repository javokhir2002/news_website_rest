import model from '../models/news.js'
// import schema from '../../lib/joi.js'
import jwt from '../../lib/jwt.js'
import path from 'path'
import { v4 as uuid } from 'uuid'


export default {

	get: async (req, res) => {
		try {

			let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if ((status == "super" || status == 'admin') && admin_id) {

				let data = await model.get()

				if (data) {

					res.json({
						status: 200,
						message: 'OK',
						data
					})

				} else {

					res.json({
						status: 204,
						message: 'No Content'
					})

				}

			} else {

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

			if ((status == "super" || status == 'admin') && admin_id) {

				let { img_link } = req.files
				img_link.name = uuid( img_link.name ) 
				
				let file_path = path.join(process.cwd(),'src','uploads', img_link.name)
				img_link.mv(file_path)
				req.body.img_link = img_link.name

				let data = await model.post(req.body)
				
				if (data) {

					res.json({
						status: 200,
						message: 'OK',
						data
					})

				} else {

					res.json({
						status: 204,
						message: 'No Content'
					})

				}

			} else {

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
	put: async (req, res) => {
		try {

			let status = jwt.verify(req.cookies.status)
			let admin_id = jwt.verify(req.cookies.admin_id)

			if ((status == "super" || status == 'admin') && admin_id) {

				let data = await model.put(req.body)

				if (data) {

					res.json({
						status: 200,
						message: 'OK',
						data
					})

				} else {

					res.json({
						status: 204,
						message: 'No Content'
					})

				}

			} else {

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

			if ((status == "super" || status == 'admin') && admin_id) {

				let data = await model.delete(req.body)

				if (data) {

					res.json({
						status: 200,
						message: 'OK',
						data
					})

				} else {

					res.json({
						status: 204,
						message: 'No Content'
					})

				}

			} else {

				res.json({
					status: 404,
					message: 'Not Found',
				})

			}

		} catch (error) {
			console.log(error)
		}
		res.end()
	}

};
