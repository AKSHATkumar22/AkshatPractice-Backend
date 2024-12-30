// basically humlog yaha par ****DATA-MODELLING**** Sikhane kii koshish kar rahe hai..
// phle hum mongoose kon import karenge taaki woh dusre main transfer hojaye warna mahi hoga
import mongoose from "mongoose";
// import { required } from "nodemon/lib/config";

// abb ek new method create kardo, aur woh schema jon hai woh object ka form mai banta hai.
// abb uske baad ek variabl mai store karwa don.
const userSchema = new mongoose.Schema({
  // abb hum yaha par models kon define karenge jon kii hume dega Database mai store karne mai..!!
  username: String, // yaha par yeh string ka form mai store karega..
  email: String, // yaha par yeh string ka form mai store karega..
  isActive: Boolean, // yaha par yeh Bool ka form mai store karega, agar login hai toh True nahi toh False..

  //abb hum yaha thoda ache se models kon banayenge
  username: {
    typeof: String, // kis type mai banega
    required: true, // kis type mai store karega
    unique: true,
    lowercase: true,
  }, // yaha par kya hoga hum timestamps naam ka cheezon kon declare
  // karenge taaki hojaye waha par createdAt and updatedAt mile warna nahi milega
  // kuch cases hote hai jon array ka form mai bhi store karti
});

// abb ek model banao aur kiske aadhar par banau..
// model banta ek string ka taor par and ek banta hai model jon kii variable main store rehta hai..!!
export const User = mongoose.model("User", userSchema);
