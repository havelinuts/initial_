// routes/contact.js
const express = require("express");
const router = express.Router();
const { getContacts, createContact } = require("../controllers/contactController");

// GET all contacts
router.get("/", getContacts);

// POST a new contact
router.post("/", createContact);

module.exports = router;
