const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const fs = require("fs")
const path = require("path")
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()

// core middleware
app.use(cors())

// session
app.use(session({ 
  secret: 'mysecret', 
  resave: false, 
  saveUninitialized: true
 })
)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
})

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }))

app.get("/", function(req, res) {
  res.json({ message: "hello world!" })
})

app.get("/users", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: "John Doe"
      },
      {
        id: 2,
        name: "Chuck Norris"
      }
    ]
  })
})

app.listen(3000, function() {
  console.log("CORS-enabled web server listening on port 3000")
})
