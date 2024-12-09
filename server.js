// this file will be used for running our server

const express = require('express')
const path = require('path')



// figure out what the client whats and sends response which is web page

// will import routes into routes and index.js
const indexRouter = require('./routes/index')
// set up web app server
const app =  express()
// respones to request


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))
// makes rhe routes available to the app
app.use('/', indexRouter)

// this lets the server run
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
