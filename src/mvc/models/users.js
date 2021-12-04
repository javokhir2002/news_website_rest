import fetch from '../../lib/postgres.js'
import md5 from 'md5';

export default {
    post: async ({first_name, last_name, password, email, gender}) => {
        try {
            return await fetch(false, `insert into users (first_name, last_name, password, email, gender) values ($1, $2, $3, $4, $5) returning *`, first_name, last_name, md5(password), email, gender)
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({user_id}) => {
        try {
            return await fetch(false, `delete from users where user_id = $1 returning *`, user_id )
        } catch (error) {
            console.error(error);
        }
    },
    get: async () => {
        try {
           return await fetch(true, `select * from users`)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({user_id,first_name, last_name, password, email, gender}) => {
        try {
            return await fetch(false, `update users set first_name = $2, last_name = $3, password = $4, email = $5, gender = $6 where user_id = $1 returning *`, user_id,first_name, last_name, md5(password), email, gender)
        } catch (error) {
            console.error(error);
        }
    },
    login: async ({name,password}) => {
        
       try {
            return await fetch(false, `select * from users where first_name = $1 and password = $2`,name, md5(password))
        } catch (error) {
            console.error(error);
        }
    }
}




