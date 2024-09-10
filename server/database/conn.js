// import mongoose, {connect} from "mongoose";
// const mongoose=require('mongoose');
// require('dotenv').config();
// import 'dotenv/config'
// mongoose.set("strictQuery", false);
// export default async function connect(){
//     mongoose.connect(process.env.ATLAS_URI)}
//    // });
mongoose.set("strictQuery", false);
// mongoose.connect("mongodb+srv://GauravSaini:Ga@20062003@quiz.spxulmm.mongodb.net/?retryWrites=true&w=majority&appName=Quiz", () => {
//    console.log("Database Connected...!")
// });
// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect("mongodb+srv://GauravSaini:Ga@20062003@quiz.spxulmm.mongodb.net/?retryWrites=true&w=majority&appName=Quiz");
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         // make the process fail
//         process.exit(1);
//     }}

   //  export default connect;


   // exports.connect=()=>{
   //    mongoose.connect("mongodb+srv://GauravSaini:Ga@20062003@quiz.spxulmm.mongodb.net/?retryWrites=true&w=majority&appName=Quiz",{
   //       //  useNewUrlParser:true,
   //       //  useUnifiedTopology:true
   //    })
   //    .then(()=>{console.log("DB connected successfully")})
   //    .catch((err)=>{
   //        console.log("DB connection issues");
   //        console.error(err);
   //        process.exit(1);
   //    })
   // }
   // export default connect;
   import mongoose from 'mongoose';
   // require('dotenv').config();
   const connectDB = async () => {
       try {
            mongoose.connect("mongodb://127.0.0.1:27017/quizApp", {
               useNewUrlParser: true,
               useUnifiedTopology: true
           });
           console.log('MongoDB connected');
       } catch (error) {
           console.error('Error connecting to MongoDB:', error);
       }
   };
   
   export default connectDB;