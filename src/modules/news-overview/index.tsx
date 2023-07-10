import React, { useEffect, useState } from "react";
import NewsList from "./news-list";
import "./index.css";

const NewsOverview = () => {
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indexes based on the current page
  const startIndex: number = (currentPage - 1) * 4;
  const endIndex: number = startIndex + 4;

  useEffect(() => {
    fetchNewsList();
  }, []);

  useEffect(() => {
    setPaginatedItems(totalItems.slice(startIndex, endIndex));
  }, [currentPage]);

  const fetchNewsList = () => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalItems(data);
        setPaginatedItems(data.slice(startIndex, endIndex));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePagination = (number: any) => {
    setCurrentPage(number);
  };

  return (
    <section className="news-container">
      <header>
        <h2 className="news-container-header">Latest News</h2>
      </header>
      <NewsList
        paginatedItems={paginatedItems}
        currentPage={currentPage}
        totalItems={totalItems}
        handlePagination={handlePagination}
      />
    </section>
  );
};

export default NewsOverview;
