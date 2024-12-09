const express = require('express')
const path = require('path')
// this will allow locations to figure out where files are located

const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js')


const app = express() // this will create the web app server

app.use(bodyParser.urlencoded({ extended: false}))
// this will allow enable of parsing of post request

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))
// static files in this location


app.set('views', path.join(__dirname, 'views'))
// our computers is different and dirname will find and create path for this view directory
// where the views (html files or templates) this will the te app
app.set('view engine', 'hbs') // handle bars will generate views


app.use('/', indexRouter) // any request will be sent here

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('server is running on port', server.address().port)
})
