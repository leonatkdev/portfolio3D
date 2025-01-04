import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({items = [], itemsPerPage = '10'}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

 const resultsLenght = items?.length;

  const currentItems = items?.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(items?.length / itemsPerPage);


  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <a
      key={i}
      href="#"
      onClick={() => setCurrentPage(i + 1)}
      className={`relative inline-flex items-center px-4 pt-2 text-sm border-t-2 border-transparent font-medium ${
        currentPage === (i + 1)
          ? "text-indigo-600 border-t-indigo-500 "
          : "text-gray-500 hover:text-gray-700"
      }`}>
        
        {i + 1}
      </a>
    ))
  };

  return (
    <>
      <div className="bg-white px-4 py-4"> 
  
        <p className="text-sm text-gray-700 mb-4">
          Showing 
          <span className="font-medium mx-1">1</span>
          to
          <span className="font-medium mx-1">{itemsPerPage}</span>
          of
          <span className="font-medium mx-1">{resultsLenght}</span>
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
