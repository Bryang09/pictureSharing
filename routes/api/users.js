const express = require("express");
const router = express.Router();

const Users = require("../../models/User");

// GET api/users

router.get("/", (req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

// GET BY ID
router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).end();
      }
      return res.status(200).json(user);
    })
    .catch(err => console.log(err));
});

// POST api/users

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    description: req.body.description
  });

  newUser.save().then(users => res.json(users));
});

module.exports = router;
