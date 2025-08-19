// controllers/productController.js

// Dummy data for now
let products = [
  { id: 1, name: "Shipping Containers", description: "Durable containers for logistics." },
  { id: 2, name: "Cargo Packaging", description: "Protective packaging solutions." },
];

// Get all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// Get one product by ID
exports.getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// Add new product
exports.addProduct = (req, res) => {
  const { name, description } = req.body;
  const newProduct = { id: products.length + 1, name, description };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
