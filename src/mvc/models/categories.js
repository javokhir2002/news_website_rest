import fetch from "../../lib/postgres.js"

export default{
    
    get: async ()=>{
        try {
            return await fetch(false,`select * from categories`)  
        } catch (error) {
            console.error(error);
        }
    },
    post:( { name, lang_id } )=>{
        try {
            return fetch(false,`insert into categories ( name, lang_id ) values ($1, $2) returning *`, name, lang_id) 
        } catch (error) {
            console.error(error);
        }
    },
    put:( { category_id, name } )=>{
        try {
            return fetch(false,`update categories set name = $2 where category_id = $1 returning *`, category_id, name) 
        } catch (error) {
            console.error(error);
        }
    },
    delete:( { category_id } )=>{
        try {
            return fetch(false,`delete from categories where category_id = $1 returning *`, category_id) 
        } catch (error) {
            console.error(error);
        }
    }

}