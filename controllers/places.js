const router = require('express').Router()

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  }) 
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

// GET /places
app.get('/', (req, res) => {
  let places = [{
    name:'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-tai-ml-tables.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
  }]
    res.render('places/index', {places})
  })

  
 
module.exports = router