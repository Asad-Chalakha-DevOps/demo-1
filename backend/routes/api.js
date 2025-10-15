const express = require("express");
const router = express.Router();
const faker = require("faker");

// Generate fake user data
router.get("/", (req, res) => {
  let users = [];
  for (let i = 0; i < 1000; i++) {
    users.push({
      id: i + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      city: faker.address.city()
    });
  }
  res.json(users);
});

module.exports = router;
