const User = require('../models/user');

const userController = {
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(200).json(newUser);
      console.log("Connected");
    } catch (error) {
      console.log(error,555);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllUsers: async (req, res) => {
    try{
      const users = await User.find();
      res.status(200).json(users);
      console.log("Connected");
    }
  catch(error){
    console.log(error, 555);
    res.status(500).json({error: "Internal Server Error"});
  }
  }
};

module.exports = userController;


