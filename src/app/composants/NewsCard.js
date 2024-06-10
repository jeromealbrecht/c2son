// components/NewsCard.js
import { useEffect, useState } from 'react';

const NewsCard = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=fr&apiKey=951c51fbdcd246559f5fe944b8860f45`
        );
        const data = await response.json();
        const latestArticle = data.articles[0];
        setArticle(latestArticle);
        console.log(latestArticle);
      } catch (error) {
        console.error('Error fetching the latest article:', error);
      }
    };

    fetchLatestArticle();
  }, []);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">
      <img src={article.urlToImage} alt={article.title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
      </div>
      <style>{`
        .card {
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .card-img {
          width: 100%;
          height: auto;
        }
        .card-body {
          padding: 16px;
        }
        .card-title {
          font-size: 1.5em;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default NewsCard;