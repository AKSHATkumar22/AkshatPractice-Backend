// sabse phle import kara
import mongoose from "mongoose";

// abb ek variable banakar usme mongoose ko store karwa don, jon kii object ka
// form mai store karta hai, timeStamps bhi lagenge hume karne ka liye
const todoSchema = new mongoose.Schema({}, { timestamps: true });

// abb hum yaha par isko declare kardenge and warna nahi hoga declare..
// kiske addhar par karenge declare, string and kisko dene wala hai yeh
export const Todo = mongoose.model("Todo", todoSchema);
