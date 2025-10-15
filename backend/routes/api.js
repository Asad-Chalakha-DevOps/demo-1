const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");

// Generate fake user data
router.get("/users", (req, res) => {
  let users = [];
  for (let i = 0; i < 1000; i++) {
    users.push({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      city: faker.location.city()
    });
  }
  res.json(users);
});

module.exports = router;
