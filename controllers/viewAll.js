const path = require("path");
const db = require("../models");

const Image = db.images;

const viewAll = (req, res) => {
  // make API call to get all images
  let images = Image.findAll({
    attributes: ["id", "name", "type"],
  }).then((images) => {
    return res.json(images);
  });
};

module.exports = {
  getImages: viewAll,
};
