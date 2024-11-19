const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logorouter = require('./routes/logo');

// Set up mongoose connection
mongoose.connect('mongodb://localhost:27017/ipldata', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const app = express();
const PORT = process.env.PORT || 5000;

db.on('error', (err) => {
  console.log("Error connecting to the database", err);
});
db.once('open', () => {
  console.log("Database connected successfully");
});

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to access
  methods: ['GET', 'POST'],
}));

// Static file serving for logos
app.use('/logos', express.static('logos'));

// Use routes for logo API
app.use('/api/logo', logorouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const path = require("path");  // For handling file paths

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Serve logos from the public/logos folder
// app.use('/logos', express.static(path.join(__dirname, 'public/logos')));

// app.use(morgan('dev'));
// app.use(express.json());
// app.use(cors());

// // Route to retrieve a logo by teamname
// app.get('/api/logo/:teamname', (req, res) => {
//     const { teamname } = req.params;
    
//     // Construct the logo filename based on the teamname
//     const logoPath = path.join(__dirname, 'public/logos', `${teamname.toLowerCase().replace(/\s+/g, '-')}.png`);
    
//     // Check if the logo file exists, and send it if found
//     res.sendFile(logoPath, (err) => {
//         if (err) {
//             console.log(err);
//             res.status(404).json({ message: "Logo not found" });
//         }
//     });
// });

// // Listen on the defined port
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
