import JWT from 'jsonwebtoken'
const PRIVATE_KEY = "PRIVATE_KEY"

export default {
	sign: (payload) => JWT.sign(payload, PRIVATE_KEY),
	verify: (token) => JWT.verify(token, PRIVATE_KEY),
}