const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

let { 
      addGoal,
      getGoals
    } = require('./controller')


app.post('/goal', addGoal )

app.get('/goals', getGoals )


app.listen(4000, () => console.log("Server running on 4000"));
