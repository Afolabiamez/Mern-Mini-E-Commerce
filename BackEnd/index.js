import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";
import productRoutes from "./Routes/productRoutes.js";

const app = express();
app.use(express.json()); // allows us to accept json data in the request.body
app.use(cors());

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "/FrontEnd/dist", "dist", "index.html")
    );
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server started at http://localhost:${PORT}`);
});
