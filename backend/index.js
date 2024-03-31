import express from "express";

import cors from "cors";

const port = 3010;
const app = express();
app.use(cors());
app.use(express.json());

// app.use("/user", user)

app.listen(port, () => {
  console.log(`Create new port http://localhost:${port}`);
});
