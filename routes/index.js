const express = require('express')

const router = express.Router()




router.get('/', (req, res) =>
{
    res.render('index.hbs')
})
router.get('/calculate', (req,res) =>{
    console.log(req.query)

    const userDataObject = req.query
    const height = userDataObject.height
    const weight = userDataObject.weight





// use weight instwad pf 100


        const calculatedbmiValue = weight / (height * height).toFixed(2)


        res.render('calculate.hbs', {bmiPlaceholder: calculatedbmiValue})
// this will calcute bmi and show what user entered

    })
    module.exports = router
/// this must be last line


// use local host when opening port 3000