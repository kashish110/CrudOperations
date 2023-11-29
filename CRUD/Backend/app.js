const express=require("express");
const app=express();
const bookRoute=require("./routes/booksRoute");
require("./Connection/conn");
app.use(express.json);
app.use("/api/v1",bookRoute);


app.listen(1000, () =>{
    console.log("SERVER STARTED SUCCESSFULLY");
});
