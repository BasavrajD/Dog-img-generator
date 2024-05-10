import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/fetch", async(req, res) => {
    try {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random");
        res.render("index.ejs", {img: result.data.message});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})
