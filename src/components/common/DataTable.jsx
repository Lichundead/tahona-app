import "./common.css";

const DataTable = ({ columns, rows, rowKey, zebra = false }) => (
  <div className="table-responsive">
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={rowKey ? rowKey(row, index) : index}
            className={zebra && index % 2 !== 0 ? "row-zebra" : undefined}
          >
            {columns.map((column) => (
              <td key={column.key} className={column.className}>
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
