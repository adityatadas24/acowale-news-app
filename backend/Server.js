const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;
const API_KEY = 'c34dfe0190cef1e1d6d898d550d7be45'; // Your API Key

app.use(cors());

// API Endpoint to fetch top news headlines with search and category filter
app.get('/api/news', async (req, res) => {
    const { q, category } = req.query; // Get search query and category from request query parameters
  
    try {
      let apiUrl = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}`;
  
      // If a search query is provided, append it to the API URL
      if (q) {
        apiUrl += `&q=${q}`;
      }
  
      // If a category is provided, append it to the API URL
      if (category) {
        apiUrl += `&topic=${category}`;
      }
  
      const response = await axios.get(apiUrl);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching news' });
    }
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
