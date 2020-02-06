const html = require("html-template-tag")

const homepage = users => {
  return html`
    <head>
      <style>
        * {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        }
        h1,
        h2 {
          text-align: center;
        }
        img {
          width: 100px;
          height: 100px;
        }
        button[type="submit"] {
          font-size: larger;
        }
        form {
          text-align: center;
        }
        .users-list {
          display: flex;
          flex-wrap: wrap;
        }
        .user-card {
          margin: 1em;
          padding: 1rem;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Create a New User</h1>
        <form action="/" method="post">
          <div>
            <label for="name">Name:</label>
            <input type="text" name="name" />
            <label for="favColor">Favorite color:</label>
            <input type="text" name="favColor" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <h1>Users</h1>
        <div class="users-list">
          ${users.map(user => {
            return html`
              <div class="user-card" style="background-color: ${user.favColor}">
                <img src="https://robohash.org/${user.name}?set=set5" />
                <h2>${user.name}</h2>
              </div>
            `
          })}
        </div>
      </div>
    </body>
  `
}

module.exports = homepage
