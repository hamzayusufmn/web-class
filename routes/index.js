const express = require('express')

const router = express.Router() // will figure out what code to run when a request is made

router.get('/' , function (req, res, next) {
    res.render('index', {title: 'feedback applications', author: 'hamza',
     })
    // this will get a request to home page, the name of handlebar file,
    // when the function is called and info will be given and res render will generate respone
} )

router.get('/feedback-form', function (req, res, next) {
    res.render('student_feedback_form')
    // when we make request, index hbs will make a request to feedback form and will use this path to display response
})

router.post('/submit-feedback', function ( req,res, next) {
    const formData = req.body

// changed router.get to post

    res.render('thank_you', {
        name: formData.name,
        email : formData.email,
        comments : formData.comments,
        currentStudent : formData['current-student']
        // this data will show a thank you and will show what we enter on browser after it loads

    })
})


module.exports = router // this is last line in file