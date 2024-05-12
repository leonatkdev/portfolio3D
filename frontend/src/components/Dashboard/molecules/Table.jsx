import React from "react";

const Table = ({ data, columns, tools }) => {
  
  const CostumeCell = ({ column, row }) => {
    switch (column.key) {
      case "state": {
        const stateClasses = {
          Active: "bg-green-50 text-green-600",
        };
        return (
          <td className="px-6 py-4">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                stateClasses[row[column.key]]
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              {row[column.key]}
            </span>
          </td>
        );
      }
      case "tools": {
        return <td className="px-6 py-4 flex">{tools && tools?.map((icon) => icon)}</td>;
      }
      default: {
        return <td className="px-6 py-4">{row[column.key]}</td>;
      }
    }
  };

  const TableRow = ({ row, columns }) => {
    return (
      <tr className="hover:bg-gray-50">
        {columns.map((column) => (
          <CostumeCell row={row} column={column} key={column.key} />
        ))}
      </tr>
    );
  };


  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50">
        <tr>
          {columns?.map((column) => (
            <th
              key={column.key}
              className="px-6 py-4 font-medium text-gray-900"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100  border-t border-gray-100">
        {data?.map((row, rowIndex) => (
          <TableRow key={rowIndex} row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
