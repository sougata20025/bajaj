const express = require("express");
const app = express();
app.get('/',(req,res)=>{
  res.send("Hello");
})
app.post("/bfhl", async (req, res) => {
  const { arr } = req.body;
  let char = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] >= "A" && arr[i] <= "Z") || (arr[i] >= "a" && arr[i] <= "z")) {
      char.push(arr[i]);
    }
  }
  for (let i = 0; i < char.length; i++) {
    if (char[i] === char[i].toLowerCase()) {
      char[i] = char[i].toUpperCase();
    }
  }
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      !((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z"))
    ) {
      if (i % 2 == 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
  }
  const options = {
    is_success: true,
    user_id: "sougata_2110991381",
    email: "sougata1381.be21@chitkara.edu.in",
    roll_number: "2110991381",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: char,
  };
  res.send(options);
});

app.listen(3000,()=>{
  console.log("Server started");
})
