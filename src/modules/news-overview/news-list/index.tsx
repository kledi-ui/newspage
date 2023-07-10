import React from "react";
import Card, { NewsArticle } from "../news-card";
import Pagination from "../../../components/pagination";

const NewsList = ({
  paginatedItems,
  currentPage,
  totalItems,
  handlePagination,
}: any) => {
  return (
    <section>
      <div className="news-list">
        {paginatedItems.map((news: NewsArticle) => (
          <Card key={news.id} {...news} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalItems.length}
        onPageChange={handlePagination}
      />
    </section>
  );
};

export default NewsList;
