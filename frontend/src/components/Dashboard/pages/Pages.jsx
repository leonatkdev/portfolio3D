import React, { useState, useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import InputField from "../atoms/inputField";
import DropDown from "../atoms/dropDownField";
import Modal from "../molecules/Modal";
import Pagination from "../atoms/pagination";
import { Link } from "react-router-dom";

const PagesDashboard = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPath, setSearchPath] = useState("");
  const [pageToDelete, setPageToDelete] = useState(null);

  useEffect(() => {
    fetch("https://portfolio3d-c4gq.onrender.com/api/pages")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTitle, searchPath]);

  const filterData = () => {
    const filtered = data.filter(
      (page) =>
        page.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        page.path.toLowerCase().includes(searchPath.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const deletePage = () => {
    fetch(`https://portfolio3d-c4gq.onrender.com/api/pages/${pageToDelete}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setData((prevData) => prevData.filter((page) => page._id !== pageToDelete));
          setFilteredData((prevData) => prevData.filter((page) => page._id !== pageToDelete));
          setModal(false);
        } else {
          console.error("Failed to delete the page");
        }
      })
      .catch((err) => {
        console.error("Server Error:", err);
      });
  };

  const columns = [
    { key: "title", header: "Title" },
    { key: "status", header: "Status" },
    { key: "path", header: "Path" },
    { key: "layout", header: "Layout" },
    { key: "language", header: "Language" },
    { key: "tools", header: "Tools" },
  ];

  const CostumeCell = ({ column, row }) => {
    switch (column?.key) {
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
          <td className="px-6 py-4 flex justify-around">
            {[
              <Link to={`/dashboard/pages/page/${row._id}`} key={row._id}>
                <TbEdit color="#6B7380" className="h-6 w-6" />
              </Link>,
              <AiOutlineStar color="#6B7380" className="h-6 w-6" />,
              <HiOutlineTrash
                color="#6B7380"
                className="h-6 w-6"
                onClick={() => {
                  setPageToDelete(row._id);
                  setModal(true);
                }}
              />,
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
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Pages</h1>
          <button
            onClick={() => (window.location.href = "pages/page")}
            className="block m-3 mr-6 ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create page
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 border border-[#F0F3F5] p-4 bg-white rounded-lg">
          <InputField
            label="Search for Title"
            placeholder="Search"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <InputField
            label="Search by Path"
            placeholder="Path"
            value={searchPath}
            onChange={(e) => setSearchPath(e.target.value)}
          />
          <DropDown />
        </div>
      </div>

      <div className="overflow-x-auto sm:overflow-x-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-0">
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
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredData?.map((row, rowIndex) => (
              <TableRow key={rowIndex} row={row} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination items={filteredData} />

      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          onConfirm={deletePage}
          title="Delete Page"
          desc="Are you sure you want to delete your page? All of your data will be permanently removed. This action cannot be undone."
        />
      )}
    </>
  );
};

export default PagesDashboard;
