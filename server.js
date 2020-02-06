const express = require("express")
const morgan = require("morgan")
const homepage = require("./homepage")

const app = express()
app.use(morgan("dev"))

app.use(express.urlencoded({ extended: true }))

// Here's where we store our website's users.
// What happens to any new users after the server restarts?
let users = [
  { name: "Linda", favColor: "blue" },
  { name: "Tina", favColor: "peachpuff" },
  { name: "Bobby", favColor: "green" },
  { name: "Louise", favColor: "red" },
  { name: "Gene", favColor: "pink" }
]

app.get("/", (req, res) => {
  res.send(homepage(users))
})

app.post("/", (req, res) => {
  users.push(req.body)
  res.status(201)
  res.redirect("/")
})

const PORT = 7070
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
