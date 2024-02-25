const express = require('express');
const routes = require('./routes/urlRoutes');
const mongoose = require('mongoose');
const app = express();

const dbURI = "mongodb://localhost:27017/Short-url";
mongoose.connect(dbURI).then((res)=>{
  // console.log("DB connected");
})


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

let port = 3000;
app.listen(port, ()=>{
  // console.log(`Server is Listening on Port : ${port}`);
});

app.use(routes);