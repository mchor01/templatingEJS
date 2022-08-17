const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = "My Home Page";
  var heading = "Micah's Website";
  res.render('pages/index',{ 
    'title':title,
    'heading':heading
  })

})
app.get('/bubbletea', (req, res) => {
  var title = "World of Bubble Tea";
  var heading = "World of Boba";

  res.render('pages/bubbletea',{ 
    'title':title,
    'heading':heading
  })
})
  app.get('/cars', (req, res) => {
  var title = "My Favorite Cars";
  var heading = "Micah's Favorite Cars";
  res.render('pages/cars',{ 
    'title':title,
    'heading':heading
  })
  })
app.get('/food', (req, res) => {
  var title = "My Favorite Food";
  var heading = "Micah's Favorite Food";
  res.render('pages/food',{ 
    'title':title,
    'heading':heading
  })
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})