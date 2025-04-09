const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017');

// Define schema & model
const totalSchema = new mongoose.Schema({
  pounds: Number
});

const donations = mongoose.model('donations', totalSchema);

// API endpoint
app.get('/api/donations', async (req, res) => {
  try {
    const total = await donations.findOne(); // Just return the one record
    console.log(total)
    res.status(200).json(total); 
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to increment pounds
app.post('/api/donations/increment', async (req, res) => {
  try {
    const updated = await donations.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId('67f58c645a0d82fe175db663') },
      { $inc: { pounds: 1 } },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating donation:', err); // 💥 log the actual error
    res.status(500).json({ message: 'Server error' });
  }
});



// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
