const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const buffetRouter = require("./Dana/routes/buffet.js");
const buffetAdminRouter = require("./Dana/routes/buffetadmin.js");
const cors = require("cors");
const multer = require("multer"); 
const path = require("path");

//const fileUpload = require("express-fileupload")
const ComplainRouter= require('./TharushaComplain/Route/ComplainRoute.js');
const ApplicationRouter = require('./Dilusha/router.js');
const formRoute = require('./TharushaReview/routes/form.js');
const paymentRoutes = require("./Chalani/routes/salaryroutes");
const adminRoutes = require("./Janani/routes/adminroutes");
const roomsRoutes = require("./Janani/routes/roomsroutes");
const posterRouter = require("./DilushaVacancy/routes/poster.js");

const app = express();
dotenv.config();


app.use(cors({credentials: true,origin:true})); 
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json("This is the new main page of the api");
});

// make path
app.use("/upload", express.static(path.join(__dirname, "/upload")));

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ status: "SUCCESS", msg: "Image has been uploaded" });
});

//routes

//Dhanithya
app.use("/api/buffet", buffetRouter);
app.use("/api/buffetadmin", buffetAdminRouter);

//Tharusha
app.use("/complains",ComplainRouter);
app.use('/api/form',formRoute);

//Dilusha
app.use('/api/application', ApplicationRouter);
app.use("/api/poster", posterRouter);

//Chalani
app.use("/finance", paymentRoutes);

//Janani
app.use("/adminrooms", adminRoutes);
app.use("/rooms", roomsRoutes);

//Anjalee


//Deshan


//Dilakshi
const UserManagementRoutes = require("./Dilakshi/Controllers/UserController");
app.use("/api/users", UserManagementRoutes);


app.listen(process.env.PORT, () => {
    connectDB();
    console.log("App is running at port"+process.env.PORT);
});



