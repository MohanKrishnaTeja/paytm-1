// const express = require("express");
// const mainRouter = require("./routes/index");
// const cors = require("cors");
// const app = express();
// const port = 8000;
// app.use(cors);
// app.use(express.json());

// app.use("api/v1",mainRouter);

// app.listen(port, () => {
//     console.log(` listening on port ${port}`)
//   })


const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/index')
const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/v1',mainRouter);

let PORT =  3900
app.listen(PORT,(req,res)=>{
    console.log(`Listening to port ${PORT}`);
})