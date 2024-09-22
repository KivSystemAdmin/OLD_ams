import { server } from "./server";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

server.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});
