import React from "react";
import "./index.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = (): number[] => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPages / 4); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <ul className="pagination">
      {getPageNumbers().map((pageNumber) => (
        <li
          key={pageNumber}
          className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
          onClick={() => onPageChange(pageNumber)}
        >
          <button className="page-link">{pageNumber}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
