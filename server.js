const express=require('express')
const app=express()
const path=require('path')

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))


app.listen(port,()=>{
    console.log('listening to port ' + port);
})