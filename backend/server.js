// import kon yaha par export kardiya
import express from "express";

// abb yaha par app main usko store karwa denge ek variable app banakar
const app = express();

//abb yaha par kya karenge hum isko app main arrow function ka saath call karenge..!!
// app.get("/", (req, res) => {
//   res.send("Server is ready to Run Akshat Kumar..!!");
// });

// abb yaha par ek jokes name ka scene create karenge jon kii mujhe sever par jakar
// mujhe ek 5 lists of jokes serve karega toh chaliye banate hai..!!

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      // yaha par hum ek ARRAY ka form mai declare karenge store karne ka baad
      id: 1,
      title: "A AKii joke",
      content: "This is a joke",
    },
    {
      // yaha par wahi kiye hai hum..!!
      id: 2,
      title: "This is a AKshat Kumar joke",
      content: "Why akii jokes",
    },
  ];
  // abb hum yaha par jokes kon send kardenge server main..!!
  res.send(jokes);
});

// abb hume kya karna hai kii port par deploy karna hai isko toh kya karenge
const port = process.env.PORT || 4000;

// abb app usko listen karke deploy bhi karega warna kaise dikhega
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
