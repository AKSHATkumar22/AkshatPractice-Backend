import { useEffect, useState } from "react";
import "./App.css";
// now I call the axios to understand the basics understanding of the calling using map function
import axios from "axios";
import { response } from "express";

function App() {
  // abb hum yaha par jokes jon backend mai banaya hai usse call karenge frontend ka saath
  // jorne ka koshish karenge.. toh kaise karenge
  // phle hum const keyword ka use karke useState hook ka call karenge
  // ise hum initially Empty array par rakhenge..
  const [jokes, setJokes] = useState([]);

  // abb axios ka call karenge kiske madad sa *USEEFFECT* ka madad sa
  useEffect(() => {
    // agar humne call karna hai kise jokes ka madad se backend main se frontend mai se
    // toh axios ka use karna padega
    axios
      .get("http://localhost/4000/jokes")
      // agar hua thik nahi tih mujhe batao bhi kyu nhai hua son, kisme error throw karke batana
      .then((response) => {
        // kiske saath response ka data ka saath nah use yeah phir throw karoge..!!
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Akshat Kumar Coding & Learning Full Stack Devlopment..!!</h1>
      {/* abb hum yaha par call karenge kise ek paragraph tag ka andar */}
      {/* jokes ka length karna padega kyu kii woh humne aaray ka form mai banaya hai */}
      <p>JOKES : {jokes.length}</p>
      {
        // abb hum yaha par ek map se array jokes kon nikalenge
        jokes.map((joke, index) => {
          // yaha par maine ek map function ka use karke id, title & content kon call karwaya hai
          <div key={joke.id}>
            {/* title */}
            <h3>{joke.title}</h3>
            {/* content */}
            <p>{joke.content}</p>
            {/* all have been called using the map function */}
          </div>;
        })
      }
    </>
  );
}

export default App;
