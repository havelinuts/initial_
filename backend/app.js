const express = require('express');
const dotenv = require('dotenv')
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/product')
const contactRoutes = require('./routes/contact')
dotenv.config({path: path.join(__dirname, 'config' ,'config.env')});
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/products",productRoutes)
app.use("/api/contacts",contactRoutes)

app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
}
);
