const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const viewAll = require("../controllers/viewAll");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  router.get("/api/files", viewAll.getImages);

  return app.use("/", router);
};

module.exports = routes;
