// controllers/contactController.js

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Public
const getContacts = (req, res) => {
  res.json({ message: "Get all contacts" });
};

// @desc    Create new contact
// @route   POST /api/contacts
// @access  Public
const createContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide all fields" });
  }

  res.status(201).json({
    message: "Contact created successfully",
    contact: { name, email, message },
  });
};

module.exports = { getContacts, createContact };
