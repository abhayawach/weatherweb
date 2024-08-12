const express = require("express")
const path = require("path")
const hbs = require("hbs")
const { Script } = require("vm")
const app = express()
const port = 1000

const staticpath = path.join(__dirname,"../public")
const templatespath = path.join(__dirname, "../templates/views")
const partialspath = path.join(__dirname, "../templates/partials")

app.set("view engine","hbs")
app.set("views", templatespath)
hbs.registerPartials(partialspath)

app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("*",(req,res)=>{
    res.send("<h2>Error 404 Page Not Found</h2>")
})

app.listen(port,()=>{
    console.log("listening")
})