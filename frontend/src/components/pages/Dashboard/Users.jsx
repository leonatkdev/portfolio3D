import { useState, useEffect } from "react";

import { HiOutlineTrash } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";

import InputField from "../../atoms/inputField";
import DropDown from "../../atoms/dropDownField";

import Modal from "../../molecules/dashboard/Modal";
import Pagination from "../../atoms/pagination";

const PageUsers = ({title = "authors"}) => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/auth/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const columns = [
    { key: "username", header: "Username" },
    { key: "role", header: "Role" },
    { key: "tools", header: "Tools" },
  ];

 
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
        return (
          <td className="px-6 py-4 flex">
            {[
              <HiOutlineTrash
                color="#6B7380"
                className="h-6 w-6"
                onClick={() => setModal(true)}
              />,
              <TbEdit color="#6B7380" className="h-6 w-6" />,
            ].map((icon) => icon)}
          </td>
        );
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
    <>
      <div className="p-4 pt-0">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button class=" block m-3 mr-6 ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Add {title}
        </button>
        <div className=" flex gap-3 border border-[#F0F3F5] p-4 bg-white rounded-lg">
          <InputField label={`Search for ${title}`} placeholder="Search" />
          {/* <DropDown /> */}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-0">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
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
            {data?.users?.map((row, rowIndex) => (
              <TableRow key={rowIndex} row={row} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination items={data?.users} itemsPerPage={10}  />

      {modal && <Modal modal={modal} setModal={setModal} />}
    </>
  );
};

export default PageUsers;
