import fetch from "../../lib/postgres.js"

export default {

    get: async () => {
        try {
            return await fetch(false, `select * from news`)
        } catch (error) {
            console.error(error);
        }
    },
    post: ({  lang_id, category_id, title, body, img_link }) => {
        try {
            return fetch(false, `insert into news ( lang_id, category_id, title, body, img_link ) values ($1, $2, $3, $4, $5) returning *`,  lang_id, category_id, title, body, img_link )
        } catch (error) {
            console.error(error);
        }
    },
    put: ({ news_id, lang_id, category_id, title, body, img_link }) => {
        try {
            return fetch(false, `update news set lang_id = $2, category_id = $3, title = $4, body = $5, img_link = $6 where news_id = $1 returning *`, news_id, lang_id, category_id, title, body, img_link )
        } catch (error) {
            console.error(error);
        }
    },
    delete: ({ news_id }) => {
        try {
            return fetch(false, `delete from news where news_id = $1 returning *`, news_id)
        } catch (error) {
            console.error(error);
        }
    }

}