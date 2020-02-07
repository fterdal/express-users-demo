let users = [
  { name: "Linda", favColor: "blue" },
  { name: "Tina", favColor: "peachpuff" },
  { name: "Bobby", favColor: "green" },
  { name: "Louise", favColor: "red" },
  { name: "Gene", favColor: "pink" }
]

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
