const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require('helmet');
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();


app.use("/images",express.static(path.join(__dirname,"public/images")));

app.use(helmet());
app.use(express.json());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"public/images/Posts");
  },
  filename: (req,file,cb) =>{
    cb(null,req.body.name);
  }
});

const upload = multer({storage});
app.post('/api/uploadMedia', upload.single("file"),(req,res) => {
  // console.log(req.body,req.body.name);
  try{

    return res.status(200).json("File uploaded!");

  }catch(err){
    console.log(err);
  }
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts",postRoute);


mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('Connected to MongoDB');
    }
  );


app.listen(8800,()=>{
    console.log("Server is running!")

})