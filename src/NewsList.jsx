import React, { useEffect, useState } from 'react';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetchNews();
  }, [searchTerm]);

  const fetchNews = async () => {
    let url = `http://localhost:5000/api/news`;

    if (searchTerm) {
      url += '?';
      if (searchTerm) {
        url += `q=${searchTerm}&`;
      }
     
    }

    console.log("Fetching news with URL: ", url);

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched data: ", data);

      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
    }
  };

  const filteredResults = articles
    .filter((article) =>
      article.title?.toLowerCase().includes(searchTerm.toLowerCase()) // Ensure title exists
    )
  

  return (
    <div className="news-container">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <div className="news-list">
        {filteredResults.length > 0 ? (
          filteredResults.map((article) => (
            <div className="news-card" key={article.title}>
              <img src={article.image || 'placeholder-image-url'} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
