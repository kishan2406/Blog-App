const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./src/routes/auth")
const userRoute = require("./src/routes/users")
const postRoute = require("./src/routes/post")
const categoryRoute = require("./src/routes/category")
const multer = require("multer")
const path = require("Path")

dotenv.config();
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

// This is the another way to connect atlas
 
// mongoose.connect(process.env.MONGO,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//     useCreateIndex: true,
// }).then(console.log("Connect to mongoDB.")).catch((err)=>console.log(err))

const connect = async()=>{

try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to mongoDB...")
}catch(err){
     console.log(err.message)
    // throw err
}

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,"hello.jpeg")
    }
});

const upload = multer({storage:storage})
app.post('/src/upload',upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded");
})

app.use("/data/auth",authRoute)
app.use("/data/users",userRoute)
app.use("/data/posts",postRoute)
app.use("/data/categories",categoryRoute)


};
app.listen(5000, ()=>{
    
    connect();
    console.log("listening on port 5000...")
})

// --------------------------------------------------------------------------



// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const authRoute = require("./src/routes/auth");
// const userRoute = require("./src/routes/users");
// const postRoute = require("./src/routes/post");
// const categoryRoute = require("./src/routes/category");
// const multer = require("multer");
// const path = require("path");

// dotenv.config();
// app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));

// mongoose
//   .connect(process.env.MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify:true
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/categories", categoryRoute);

// app.listen("5000", () => {
//   console.log("Backend is running.");
// });