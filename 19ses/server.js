const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user.route')
const bookRouter = require('./router/book.route')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', bookRouter)

PORT=4000

app.listen(PORT,()=>{
    console.log("Listening on 4000");
})