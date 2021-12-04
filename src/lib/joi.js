import joi from 'joi'

let schema = {

	user: joi.object({

		first_name: joi.string().alphanum().min(3).max(25).trim(true).required(),
		last_name: joi.string().alphanum().min(3).max(25).trim(true).required(),
		email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim(true).required(),
		password: joi.string().alphanum().min(8).trim(true).required(),
		gender: joi.string().min(4).max(6).trim(true).required()

	}),

	admin: joi.object({

		first_name: joi.string().alphanum().min(3).max(25).trim(true).required(),
		password: joi.string().alphanum().min(8).trim(true).required()

	}),

	category: joi.object({

		name : joi.string().min(3).max(56).trim(true).required()

	}),

	news: joi.object({

		title: joi.string().min(12).max(128).trim(true).required(),
		body: joi.string().min(12).max(256).trim(true).required(),
		img_link: joi.string().trim(true).required()

	}),

	comment: joi.object({

		body: joi.string().min(12).max(256).trim(true).required()

	}),

	languages: joi.object({

		name: joi.string().min(2).trim(true).required()

	})

}



export default schema
