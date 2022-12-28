const express = require('express')
var  { engine } =  require('express-handlebars');
var morgan = require('morgan');
var path  = require('path')
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json())

app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/search', (req, res) => {
  console.log(req.query)
  res.render('search');
});
app.post('/news', (req, res) => {
  console.log(req.body)
  res.render('search');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})