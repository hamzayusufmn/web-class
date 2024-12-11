const express = require('express')

const apiRoutes = require('./routes/api')

const app = express()


app.use('/api', apiRoutes)
// this is sending requests to api routes and /students is second part of students
// this is expecting and middleware is functions that is called upon request
const server = app.listen(process.env.PORT || 3000, function (){
    console.log('express server running on port' , server.address().port)

    // when importing other files switch cd and install dependices so vue can work
})