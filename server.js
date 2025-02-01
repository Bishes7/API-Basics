import express, { application } from "express";

const app = express();
const PORT = 8000;

import userRouter from "./src/userRouter";
// we need to use the middleware
app.use("/api/v1/users", userRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

// Make post data available in the req.body
app.use(express.json());
