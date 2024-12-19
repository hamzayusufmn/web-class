const express = require('express')

const apiRoutes = require('./routes/api')
 const path = require('path')







// they are located in client and will request to home page

const app = express()

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
 app.use('/', staticFiles)


app.use(express.json())
// was missing this and data was returning null


app.use('/api', apiRoutes)

app.use(function (req, res, next){
 res.status(404).send('sorry, page not found')
})
// this will respond to 404 error
app.use(function (err,req, res, next){
    console.log(err)
    res.status(500).send('SERVER Error')
})
// this is sending requests to api routes and /students is second part of students
// this is expecting and middleware is functions that is called upon request
const server = app.listen(process.env.PORT || 3000, function (){
    console.log('express server running on port' , server.address().port)

    // when importing other files switch cd and install dependices so vue can work
})