import express from "express";

const router = express.Router();

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

router.get("/", (req, res) => {
  res.json({
    message: "todo,",
    DB,
  });
  console.log(req.query);
  DB.push(req.query);
});

router.post("/", (req, res) => {
  res.json({
    message: "New user added",
    user: DB,
  });
  console.log(req.body);
  DB.push(req.body);
});

router.put("/", (req, res) => {
  console.log(req.headers.authorization);
  DB.push(req.body);
  res.json({
    message: "put method is implemented",
  });
});

router.delete("/:id", (req, res) => {
  console.log(req.params, "from delete");
  //   DB.push(req.body);

  res.json({
    message: "deleted method is added",
  });
});

export default router;
