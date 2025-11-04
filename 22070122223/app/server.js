const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'public')));

const baseNews = [
  { title: "AI Revolution: GPT-5 Changes Everything", date: "2025-11-04" },
  { title: "NASA Discovers New Habitable Planet", date: "2025-11-03" },
  { title: "Stock Markets Reach Record Highs", date: "2025-11-02" },
  { title: "Electric Cars Dominate Sales in 2025", date: "2025-11-01" }
];

// API endpoint for news
app.get('/api/news', (req, res) => {
  const randomExtra = [
    { title: "Global Summit on Climate Change 2025 Announced", date: "2025-11-05" },
    { title: "Breakthrough in Quantum Computing Achieved", date: "2025-11-05" },
    { title: "Major Advances in Medical AI Diagnostics", date: "2025-11-05" }
  ];
  // Randomly add one more headline
  const feed = [...baseNews, randomExtra[Math.floor(Math.random() * randomExtra.length)]];
  res.json(feed);
});

app.listen(port, () => {
  console.log(`🚀 Interactive Newsfeed app running on port ${port}`);
});
