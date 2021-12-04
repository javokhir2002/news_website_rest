import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(),'src','.env')})


export default{
    user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	database: process.env.PGDATABASE,
}

