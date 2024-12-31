const cluster = require("node:cluster");
const express = require("express");
const os = require('os');

const totalCpus = os.cpus().length;

if(cluster.isPrimary) {

      for (let i = 0; i < totalCpus; i++) {
        cluster.fork();
      }

} else {
    const app = express();
    app.get("/",(req,res)=>{
        return res.json({
            msg:`Hello from ${process.pid}`
        })
    })

    app.listen(8000,()=>{console.log("Server Running on port 8000")});
}

