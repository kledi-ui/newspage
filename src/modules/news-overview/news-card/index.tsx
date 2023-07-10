import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export interface NewsArticle {
  id?: string;
  title?: string;
  imageLink?: string;
  author?: string;
  description?: string;
  createdAt?: string;
  category?: string;
}

const Card = (props: NewsArticle) => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/news/${props.id}`);
  };
  return (
    <div className="card" onClick={handleView}>
      <picture className="card-image">
        <img alt={props.title} src={props.imageLink} />
      </picture>
      <div className="card-body">
        <div className="ligth-font">
          <span>{props.category}</span>
        </div>
        <header>
          <h2>{props.title}</h2>
        </header>
        <p>
          <p>{props.author}</p>
        </p>
        <div className="ligth-font">
          <p>{props.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
