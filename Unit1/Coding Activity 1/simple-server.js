const express = require('express');
const port = 3000;
const app = express()

app.get('/', (req, res) => {
    res.send("HAVE A NICE DAY");
  });

  app.listen(port,()=>{
    console.log(`listening to port ${port}`)
  })