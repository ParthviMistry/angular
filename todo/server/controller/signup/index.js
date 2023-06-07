const Signup = require('../../model/Signup');

const getUser = async (req, res) => {
  try {
    const data = await Signup.find().sort({ createdAt: -1 });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const getUserById = async (req, res) => {
  try {
    const data = await Signup.findOne({ _id: req.params.id });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = await Signup.findByIdAndDelete({ _id: req.params.id }).sort({ createdAt: -1 });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const updateUser = async (req, res) => {
  try {
    const data = await Signup.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true }).sort({
      createdAt: -1,
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const postUser = async (req, res) => {
  try {
    const data = await Signup.insertMany({
      ...req.body,
    });

    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.toString());
  }
};

module.exports = {
  postUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
};
