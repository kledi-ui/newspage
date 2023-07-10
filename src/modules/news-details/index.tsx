import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../../routes/errorHandler";
import "./index.css";

const NewsDetail = () => {
  const [foundNews, setFoundNews] = useState<any>(null);
  const { newsid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNewsList();
  });

  const fetchNewsList = () => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((news: any) => news.id === newsid);
        setFoundNews(found);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBackNavigation = () => {
    navigate('/')
  };

  if (foundNews === undefined) {
    return <ErrorPage />;
  }

  return (
    <section className="news-detail">
      <button className="news-detail-button" onClick={handleBackNavigation}>
        <i className="fas fa-arrow-left"></i> back
      </button>
      <h2>{foundNews?.title}</h2>
      <picture className="news-details-image">
        <img alt={foundNews?.title} src={foundNews?.imageLink} />
      </picture>
      <h3>{foundNews?.author}</h3>
      <p>
        Published at : <strong>{foundNews?.createdAt}</strong>
      </p>
      <p>{foundNews?.description}</p>
    </section>
  );
};

export default NewsDetail;
