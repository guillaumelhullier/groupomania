const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
const sharp = require("sharp");
const { Error } = require("mongoose");

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
  await sharp(req.file.buffer)
    .resize({ width: 150, height: 150 })
    .toFile(`${__dirname}/../client/public/uploads/profil/${fileName}`);

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "./uploads/profil/" + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).send({ message: Error });
  }
};
