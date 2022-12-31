const express = require("express");
const cors = require('cors');

// Routes path
const { routerUsers } = require("./src/routes/users");
const { routerWords } = require("./src/routes/words");
const { routerNotes } = require("./src/routes/notes");

const app = express();

// Middlewares.
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// Routes.
app.use("/users", routerUsers);
app.use("/words", routerWords);
app.use("/notes", routerNotes);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});