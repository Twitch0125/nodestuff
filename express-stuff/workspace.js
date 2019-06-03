const express = require("express");
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'super secret',
  resave: false,
  saveUnitialized: false,
  cooke: {maxAge: 10000}
}));

app.use((req, res, next)=> {
  console.log(`${req.method} request for ${req.url}`);
  next();
})

app.use(express.static('./public'));

app.get('/views/', (req, res, next)=>{
  if(req.session.views){
    req.session.views++;
    res.setHeader('Content-Type', "text/html");
    res.write(`<p>views: ${req.session.views}\n `);
    res.write(`${req.session.cookie.maxAge / 1000} s`);
    res.end();
  } else{
    req.session.views = 1;
    res.end('welcome!')
  }
})

app.listen(3000),
  () => {
    console.log("listening on port 3000");
  };
