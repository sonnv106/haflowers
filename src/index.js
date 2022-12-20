const express = require('express')
var  { engine } =  require('express-handlebars');
var morgan = require('morgan');
var path  = require('path')
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})