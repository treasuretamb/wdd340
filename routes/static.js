const express = require('express');
const router = express.Router();

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public"));

// Define routes
router.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});


module.exports = router;



