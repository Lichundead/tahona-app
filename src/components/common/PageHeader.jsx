import "./common.css";

const PageHeader = ({ title, searchPlaceholder = "🔍 Buscar", children }) => (
  <header className="report-header">
    <h1>{title}</h1>
    <div className="header-right">
      <input type="search" placeholder={searchPlaceholder} className="search-pill" />
      {children}
    </div>
  </header>
);

export default PageHeader;
