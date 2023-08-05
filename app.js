const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>My Node APP</h1><br>Testing manual Deployment on Digital Ocean')
});

app.listen(5000,()=>{
    console.log('App listening to 5000')
});

