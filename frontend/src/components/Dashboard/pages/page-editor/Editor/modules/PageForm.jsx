import { useState, useEffect } from 'react';
import Dropdown from '../../../../atoms/dropDownField';

const SimpleForm = ({ PageForm, setPageForm, authors }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPageForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAuthorSelect = (author) => {
    setPageForm((prevState) => ({
      ...prevState,
      authID: author._id,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://portfolio3d-c4gq.onrender.com/api/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(PageForm),
      });

      console.log('formData', PageForm);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Data successfully sent to the server:', result);
    } catch (error) {
      console.error('Failed to send form data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={PageForm?.title}
          onChange={handleChange}
          className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="path"
          className="block text-sm font-medium text-gray-700"
        >
          Path:
        </label>
        <input
          type="text"
          name="path"
          id="path"
          value={PageForm?.path}
          onChange={handleChange}
          className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="authID"
          className="block text-sm font-medium text-gray-700"
        >
          Author:
        </label>
        <Dropdown 
          options={authors} 
          selectedData={PageForm?.authID} 
          showImage={false} 
          showLabel={false}
          onSelect={handleAuthorSelect} // Pass the handler
        />
      </div>

      <div>
        <label
          htmlFor="publishDate"
          className="block text-sm font-medium text-gray-700"
        >
          Publish Date:
        </label>
        <input
          type="date"
          name="publishDate"
          id="publishDate"
          value={PageForm?.publishDate}
          onChange={handleChange}
          className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="publishDate"
          className="block text-sm font-medium text-gray-700"
        >
         Short Description
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={PageForm?.description}
          onChange={handleChange}
          className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="publishDate"
          className="block text-sm font-medium text-gray-700"
        >
         Main Image
        </label>
        <input
           type="file"
          name="Image"
          id="Image"
          value={PageForm?.Image}
          onChange={handleChange}
          className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </form>
  );
};

export default SimpleForm;
