const express = require("express");
const router = express.Router();
const faker = require("faker"); // <-- change here

// Generate fake user data
router.get("/users", (req, res) => {
  let users = [];
  for (let i = 0; i < 1000; i++) {
    users.push({
      id: i + 1,
      name: faker.name.findName(),        // <-- change here
      email: faker.internet.email(),      // same
      city: faker.address.city()          // <-- change here
    });
  }
  res.json(users);
});

module.exports = router;
