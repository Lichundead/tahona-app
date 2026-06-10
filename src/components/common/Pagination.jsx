import "./common.css";

// Paginación visual sobre datos simulados; conectar cuando exista backend.
const DEFAULT_PAGES = [1, 2, 3, 4, 5, "...", 20];

const Pagination = ({ pages = DEFAULT_PAGES, activePage = 2, onPageChange }) => (
  <div className="pagination-container">
    {pages.map((page, index) => (
      <button
        key={`${page}-${index}`}
        type="button"
        className={`page-number ${page === activePage ? "active" : ""}`}
        onClick={() => typeof page === "number" && onPageChange?.(page)}
      >
        {page}
      </button>
    ))}
  </div>
);

export default Pagination;
