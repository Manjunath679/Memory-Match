const express=require('express')
const app=express()
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))


app.listen(7123,()=>{
    console.log("server is connected to http://localhost:7123")
})