const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const { engine } = require('express-handlebars');


//Set template engine
app.engine('hbs', engine({
    extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

//Set static files
app.use(express.static(path.join(__dirname,'public')));


//Set to get data from form
//Get form data from form [BODY]
app.use(
    express.urlencoded({
        extended: true,
    }),
);

//Show data by json
app.use(express.json());

app.get('/trang-chu', (req, res) => {
  res.render('home');
});


//Set port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});