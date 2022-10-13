const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;


//Logique get all

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select();
  res.status(200).json(users);
};

//Logique get one

module.exports.userInfo = (req, res) => {
  console.log(req.params);
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown :" + err);
  });
};
