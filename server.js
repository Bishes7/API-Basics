import express from "express";

const app = express();
const PORT = 8000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

const DB = [
  {
    id: 1,
    fName: "Bishes ",
    lName: "Adhikari",
  },
  {
    id: 2,
    fName: "Umesh",
    lName: "Dhakal",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "todo,",
    DB,
  });
  console.log(req.query);
});

app.post("/", (req, res) => {
  res.json({
    message: "post method",
    user: DB,
  });
});

app.put("/", (req, res) => {
  res.json({
    message: "put method",
  });
});
