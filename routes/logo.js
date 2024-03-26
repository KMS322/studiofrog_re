const express = require("express");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");
const path = require("path");
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/logos/");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    cb(null, decodeURIComponent(originalName));
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    const { originalname: file_name } = req.file;
    const decodeFileName = decodeURIComponent(file_name);

    res.status(201).send(`${decodeFileName} 등록 완료`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/add", async (req, res, next) => {
  try {
    console.log("req.body: ", req.body.imageSrcs);
    const lists = req.body.imageSrcs.slice();
    for (const list of lists) {
      const allLogos = await LogoList.findAll();
      const maxLength = allLogos.length;

      await LogoList.create({
        img_src: list,
        order: maxLength + 1,
      });
    }
    res.status(200).send("logo added");
  } catch (error) {
    console.error(error);
    next();
  }
});

router.post("/change", async (req, res, next) => {
  try {
    for (const list of req.body.lists) {
      await LogoList.update(
        { order: list.order },
        { where: { img_src: list.img_src } }
      );
    }
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next();
  }
});

const folderDeletePath = path.join(__dirname, "..", "public", "logos");

router.post("/delete", async (req, res, next) => {
  try {
    const deleteLogo = await LogoList.findOne({
      where: { id: req.body.id },
    });
    const allLogos = await LogoList.findAll();
    const filteredLogos = allLogos.filter(
      (logo) => logo.order > deleteLogo.order
    );
    for (const logo of filteredLogos) {
      await LogoList.update(
        {
          order: logo.order - 1,
        },
        { where: { id: logo.id } }
      );
    }

    const filePath = path.join(folderDeletePath, deleteLogo.img_src);
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error("File not found:", filePath);
      } else {
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
          } else {
            console.log("File deleted:", filePath);
          }
        });
      }
    });
    await LogoList.destroy({
      where: { id: req.body.id },
    });

    res.status(200).send("deleted");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = router;
