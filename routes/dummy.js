const express = require("express");
const router = express.Router();
const { LogoList } = require("../models");
const xlsx = require("xlsx");
const path = require("path");

const filePath = path.resolve(__dirname, "./logoDummy.xlsx");

function readExcelFile(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    return jsonData;
  } catch (error) {
    console.error("Error reading Excel file:", error);
    throw error;
  }
}
function processExcelData(data) {
  return data.map((row) => {
    return {
      img_src: String(row["img_src"]),
    };
  });
}
function generateObjectArrayFromExcel(filePath) {
  const excelData = readExcelFile(filePath);
  console.log("excelData : ", excelData);
  const processedData = processExcelData(excelData);
  return processedData;
}

router.post("/addLogos", async (req, res, next) => {
  const logos = generateObjectArrayFromExcel(filePath);
  try {
    for (const logo of logos) {
      const existingLogos = await LogoList.findAll();
      let maxOrder = 0;
      if (existingLogos) {
        maxOrder = existingLogos.reduce(
          (max, logo) => Math.max(max, logo.order),
          0
        );
      }
      const addedLogo = await LogoList.create({
        img_src: `${logo.img_src}.jpg`,
        order: maxOrder + 1,
      });
    }

    res.status(201).json({ message: "Logos added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add logos" });
  }
});

module.exports = router;
