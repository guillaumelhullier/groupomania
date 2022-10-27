const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
const sharp = require("sharp");

module.exports.uploadProfil = async (req, res) => {
  const fileName = req.body.name + ".jpg";

  try {
    if (
      req.file.mimetype !== "image/jpg" &&
      req.file.mimetype !== "image/png" &&
      req.file.mimetype !== "image/jpeg"
    )
      throw Error("invalid file");

    if (req.file.size > 500000) throw Error(" max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }
  try {
    await sharp(req.file.buffer)
      .resize({ width: 150, height: 150 })
      .toFile(`{__dirname}/../client/public/uploads/profil/${fileName}`);
    res.status(201).send("Photo de profil chargée avec succès");
  } catch (err) {
    res.status(400).send(err);
  }
};
