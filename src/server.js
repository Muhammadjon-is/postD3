import express from "express"
import listEndpoints from "express-list-endpoints";
const app = express();

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.table(listEndpoints(app))
    console.log("server is running on ", PORT);
})



