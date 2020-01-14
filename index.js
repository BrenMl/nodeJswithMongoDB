const mongoose = require('mongoose');
const app = require('./router')
const port = 3000;


app.listen(port,function(){
    console.log('app listen on port'+ port);
});

mongoose.connect('mongodb://localhost/writefy',(err, res)=>{
if(err){
    return console.log('Connection error');
}
console.log('connected successfuly')
});
