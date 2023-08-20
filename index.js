  const express = require("express");
  const app = express();
app.use(express.json());
const fileUpload = require('express-fileupload');
var path = require('path');
const port = process.env.PORT || 3000;
app.use(fileUpload({ safeFileNames: true, preserveExtension: true })); 
app.use("/uploads", express.static("uploads"));
  app.patch("/upload_document", async (req, res) => {
        let file = req.files.file
       await file.mv('./upload/' + req.files.file.name, function(err) {
        if (err) {
            res.status(500).json({msg:'Error to upload please try later'});
        } else {
         res.status(200).json({msg:'File uploded successfully'});
         
        }
      })
    });

    app.listen(port, "0.0.0.0", () =>
  console.log(`welcome your listernig at port ${port}`)
);