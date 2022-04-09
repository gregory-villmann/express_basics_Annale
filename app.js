const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const {request, response} = require("express");
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(request, response)=>{
  response.send('<h1>Teretere vanakere</h1>')
})
app.get('/questions',(request, response)=>{
  let questions = [
    {title:"Kes on Eesti president?", user: "Kadi", votes: 10},
    {title:"Mis on suurim planeet?", user: "Marko", votes: 7}
  ]

  response.render('questions.ejs', {questions: questions});
})
app.get('/login',(request, response)=>{

  response.render('login.ejs');
});

app.post('/login', (request, response)=>{
  console.log("post req done")
  console.log(request.body);
  let username = request.body.kasutajanimi;
  let password = request.body.salasona;

  if(username === 'user' && password === 'qwerty'){
    response.redirect('/dashboard');
  }
});

app.get('/dashboard',(request, response)=>{
  response.render('dashboard.ejs');
})


app.listen(3000, ()=>{
  console.log('Server alustas http://localhost:3000');
})
