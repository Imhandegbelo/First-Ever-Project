const express = require("express")

const path = require("path")
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

const PORT = 5000

let userArray = []

//Application middlewares
//Log requests to the console
app.use(morgan('dev'))


//Parses form objects from clients and makes it available in req.body
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "./public")))

//set up viewing engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.render("index", {
        pageTitle: "Home"
    })
})

app.get('/login', (req, res) => {
    res.render("login", {
        pageTitle: "Login"
    })
})

app.get('/signUp', (req, res) => {
    res.render("signUp", {
        pageTitle: "Sign Up"
    })
})

app.get('/submitForm', (req, res) => {
    let userObject = req.body
    userArray.push(userObject)
    console.log(UserArray)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log("Ehen! Server dey run")
})