import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page
  const totalItems = 10; // Total number of items (you can calculate this dynamically)

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can implement logic here to fetch data for the new page
  };

  const renderPaginationLinks = () => {
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
      links.push(
        <a
          key={i}
          href="#"
          className={`relative inline-flex items-center px-4 pt-2 text-sm border-t-2 border-transparent font-medium ${
            currentPage === i
              ? "text-indigo-600 border-t-indigo-500 "
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </a>
      );
    }
    return links;
  };

  return (
    <>
      <div className="bg-white px-4 py-4"> 
  
        <p class="text-sm text-gray-700 mb-4">
          Showing 
          <span class="font-medium mx-1">1</span>
          to
          <span class="font-medium mx-1">10</span>
          of
          <span class="font-medium mx-1">97</span>
          results
        </p>
      
      <div className="">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between border-t-[1px] border-gray-200 bg-white">
          <a
            href="#"
            className="relative inline-flex text-sm border-t-[1.5px] mt-[-1.5px] border-transparent items-center px-2 pt-2 text-gray-400 gap-2 hover:text-gray-700 hover:border-gray-300 "
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowLeftLong className="h-[20] w-4 " />
            <span>Previous</span>
          </a>
          <div
            className="isolate inline-flex mt-[-1px]"
            aria-label="Pagination"
          >
            {renderPaginationLinks()}
          </div>
          <a
            href="#"
            className="relative inline-flex text-sm border-t-[1.5px] mt-[-1.5px] border-transparent items-center px-2 pt-2 text-gray-400 gap-2 hover:text-gray-700 hover:border-gray-300 "
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <FaArrowRightLong className="h-[20] w-4 " />
          </a>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Pagination;
