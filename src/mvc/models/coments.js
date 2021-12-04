import fetch from "../../lib/postgres.js"

export default{
    
    get: async ()=>{
        try {
            return await fetch(false,`select * from coments`)  
        } catch (error) {
            console.error(error);
        }
    },
    post:( { news_id, user_id, body } )=>{
        try {
            return fetch(false,`insert into coments ( news_id, user_id, body ) values ($1, $2, $3) returning *`, news_id, user_id, body ) 
        } catch (error) {
            console.error(error);
        }
    },
    put:( {coment_id, news_id, user_id, body } )=>{
        try {
            return fetch(false,`update coments set news_id = $2, user_id = $3, body = $4 where coment_id = $1 returning *`,coment_id, news_id, user_id, body )             
        }catch(error){
            console.error(error);
        }
    },
    delete:( { coment_id } )=>{
        try {
            return fetch(false,`delete from coments where coment_id = $1 returning *`, coment_id) 
        } catch (error) {
            console.error(error);
        }
    }

}