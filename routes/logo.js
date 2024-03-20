const express = require("express");
const multer = require("multer");
const router = express.Router();
const { LogoList } = require("../models");

router.post("/load", async (req, res, next) => {
  try {
    const logoLists = await LogoList.findAll({});
    if (logoLists) {
      res.status(200).json(logoLists);
    }
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = router;
