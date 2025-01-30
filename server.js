import express, { application } from "express";

const app = express();
const PORT = 8000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

// Make post data available in the req.body
app.use(express.json());

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
  DB.push(req.query);
});

app.post("/", (req, res) => {
  res.json({
    message: "New user added",
    user: DB,
  });
  console.log(req.body);
  DB.push(req.body);
});

app.put("/", (req, res) => {
  console.log(req.body);
  DB.push(req.body);
  res.json({
    message: "put method is implemented",
  });
});

app.delete("/", (req, res) => {
  console.log(req.body);
  DB.push(req.body);

  res.json({
    message: "deleted method is added",
  });
});
