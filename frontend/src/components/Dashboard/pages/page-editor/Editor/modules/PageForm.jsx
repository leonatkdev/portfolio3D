import  {useState} from 'react'

const SimpleForm = ({PageForm, setPageForm}) => {
    
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log('name', name);
      setPageForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const response = await fetch("http://localhost:4000/api/pages", {
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
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author:
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={PageForm?.author}
            onChange={handleChange}
            className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            htmlFor="manualDate"
            className="block text-sm font-medium text-gray-700"
          >
            Manual Date:
          </label>
          <input
            type="date"
            name="manualDate"
            id="manualDate"
            value={PageForm?.manualDate}
            onChange={handleChange}
            className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
  
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  export default SimpleForm;