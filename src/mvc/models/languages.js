import fetch from "../../lib/postgres.js"

export default{
    
    get: async ()=>{
        try {
            return await fetch(false,`select * from languages`)  
        } catch (error) {
            console.error(error);
        }
    },
    post:( { name } )=>{
        try {
            return fetch(false,`insert into languages ( name ) values ($1) returning *`, name) 
        } catch (error) {
            console.error(error);
        }
    },
    put:( { lang_id, name } )=>{
        try {
            return fetch(false,`update languages set name = $2 where lang_id = $1 returning *`, lang_id, name ) 
        } catch (error) {
            console.error(error);
        }
    },
    delete:( { lang_id } )=>{
        try {
            return fetch(false,`delete from languages where lang_id = $1 returning *`, lang_id) 
        } catch (error) {
            console.error(error);
        }
    }

}