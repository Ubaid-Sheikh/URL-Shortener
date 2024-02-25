const express = require("express");
const router = express.Router();

const URL = require("../models/urlModel");
const shortid = require("shortid");


router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  const  {url}  = req.body;
  const shortId = shortid(8);
  const newUrl = new URL({shortId, url});
  newUrl
    .save()
    .then((result) => {
        res.json({id: shortId});
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id', async (req, res)=>{
  const shortId = req.params.id;
  try {
    const data = await URL.findOne({shortId: shortId});
    res.redirect(data.url);
  } catch (error) {
    // console.log(error);
  }
})

module.exports = router;
