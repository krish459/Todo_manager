const express = require('express');
const db = require("./db");
// const Item = require('./models/itemModel')
const app = express();


app.use(express.json());

const itemRoute = require('./routes/itemRoute')

app.get("/", (req, res)=>{
    res.send("Server working");
});

app.use('/api/items/', itemRoute)

// app.get('/getitems',(req,res)=>{
//     Item.find({},(err , docs)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })
// });

const port = process.env.PORT || 5000;

app.listen(port, ()=> {`server running on port ${port}`});