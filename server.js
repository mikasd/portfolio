const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//set directory views location
app.set('views', './views');

//set default engine to be ejs
app.set('view engine', 'ejs');

//handles GET requests at / route
app.get('/', (req, res) => {
    const data = {
      person: {
        firstName: 'Tom',
        lastName: 'Scott',
      }
    }
    // Notice now the data is the second argument passed to the template render method
    res.render('index', data);
  });

  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body })
  });

  app.get('*', function (req, res) {
    res.send('404').status(404);
  })
    
app.listen(3000, () => {
    console.log('listening at http://localhost:3000');
});