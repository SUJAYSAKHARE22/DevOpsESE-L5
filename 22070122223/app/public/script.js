async function loadNews() {
  const feedContainer = document.getElementById('feed');
  feedContainer.innerHTML = '<p>Loading news...</p>';

  try {
    const response = await fetch('/api/news');
    const news = await response.json();
    feedContainer.innerHTML = news.map(item => `
      <div class="news-item">
        <strong>${item.title}</strong>
        <div class="date">${item.date}</div>
      </div>
    `).join('');
  } catch (err) {
    feedContainer.innerHTML = '<p style="color:red;">Failed to load news.</p>';
  }
}

document.getElementById('refresh').addEventListener('click', loadNews);

// Load news on page load
window.onload = loadNews;
