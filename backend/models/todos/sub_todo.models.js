import mongoose from "mongoose";

const subTodosSchema = new mongoose.Schema(
  {
    // hum yaha par karenge kii define kardenge sub schemas kon warna nhi hoga define..!!
    content: {
      type: String,
      required: true,
    },
    // subschemas
    complete: {
      type: Boolean,
      default: false,
    },
    // kisne create kiya hai yaha par
    createdBy: {
      type: mongoose.Schemas.Types.ObjectId,
      ref: "User", // yaha par hume schema kon define kiya tha wahi declare karenge sub schemas se uthayenge
    },
    // yeh sab kiya hai sub Arrays ka Todo hai jon kii declare hoga warna nahi hoga declare
    subTodos: [
      {
        type: mongoose.Schemas.Types.ObjectId,
        ref: "subTodo",
      },
    ],
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodos", subTodosSchema);
