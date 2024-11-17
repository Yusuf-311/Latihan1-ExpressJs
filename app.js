const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 3000;
app.use(express.json());

// Rute Dasar
// app.get("/", (req, res) => {
//   res.send("Hello , World");
// });

let users = [
  { id: 1, name: "Yusuf", email: "muhamadyusuf@gmail.com" },
  { id: 2, name: "Safi", email: "safi@gmail.com" },
];

// Get All Users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Menjalankan Server

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
