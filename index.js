let mongoose = require("mongoose");
let express = require("express");
const { insert_data } = require("./App/controlles/web");
require("dotenv").config();

let app = express();
app.use(express.json())

app.post("/api/enquiry/insert",insert_data)

mongoose.connect(process.env.DBURL).then(()=>{
    app.listen(process.env.PORT);
    console.log("hi")
}).catch((err)=>{
    console.log(err)
})
