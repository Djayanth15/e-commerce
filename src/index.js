import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./env" });
import { app } from "./app.js";

(async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("Connection error(idx) :", error);
      throw error;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  } catch (error) {
    console.log("error :: idx/src :", error);
  }
})();
