import io from "socket.io-client"

const socket = io(window.location.origin)

let users = [{ name: "Annika", favColor: "orange" }]
const usersList = document.getElementById("users-list")
const renderUsers = () => {
  usersList.innerHTML = ""
  users.forEach(user => {
    const userCard = document.createElement("div")
    userCard.classList.add("user-card")
    userCard.style.backgroundColor = user.favColor
    userCard.innerHTML = `
      <img src="https://robohash.org/${user.name}?set=set5" />
      <h2>${user.name}</h2>
    `
    usersList.appendChild(userCard)
  })
}
renderUsers()

socket.on("connect", () => {
  console.log("I am now connected to the server!")

  socket.on("all-users", allUsers => {
    console.log("received all users", allUsers)
    users = allUsers
    renderUsers()
  })

  socket.on("new-user", user => {
    users.push(user)
  })
})
