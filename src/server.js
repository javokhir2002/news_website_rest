const PORT = process.env.PORT || 9999
import fileupload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import router from './mvc/index.js'
import express from 'express'

const app = express()

// middlewares
app.use(fileupload())
app.use(cookieParser())
app.use(express.json())


// router
app.use(router)

app.listen( PORT, () => console.log(`server run http://localhost:${PORT}`) )