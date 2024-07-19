/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useEffect } from 'react';

const Tool = () => {
  const [toolData, setToolData] = useState([]);
  const [admin, setAdmin] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 6;

  const [newTool, setNewTool] = useState({
    title: '',
    type: '',
    description: '',
    image: null,
  });

  const fetchTools = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:3000/api/v1/tools', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setToolData(response.data.data);
    } catch (error) {
      console.error('Error fetching tools:', error);
    }
  };

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    const token = localStorage.getItem('token');

    if (adminData) {
      setAdmin(adminData);
    }

    fetchTools();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTool((prevTool) => ({ ...prevTool, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewTool((prevTool) => ({ ...prevTool, image: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newTool.title);
    formData.append('type', newTool.type);
    formData.append('description', newTool.description);
    if (newTool.image) {
      formData.append('image', newTool.image);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/api/v1/tools',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Tool added:', response.data);
      // Refresh tool data
      fetchTools();
    } catch (error) {
      console.error('Error adding tool:', error.response.data);
    }
  };

  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = toolData.slice(indexOfFirstTool, indexOfLastTool);

  const totalPages = Math.ceil(toolData.length / toolsPerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(toolData.length / toolsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Data Tool
        </h4>
      </div>

      <form className='py-4 px-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-black dark:text-white mb-2'>Title</label>
          <input
            type='text'
            name='title'
            value={newTool.title}
            onChange={handleInputChange}
            className='w-full bg-white px-3 py-2 border rounded-md text-black dark:text-white'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black dark:text-white mb-2'>Type</label>
          <input
            type='text'
            name='type'
            value={newTool.type}
            onChange={handleInputChange}
            className='w-full bg-white px-3 py-2 border rounded-md text-black dark:text-white'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black dark:text-white mb-2'>
            Description
          </label>
          <input
            type='text'
            name='description'
            value={newTool.description}
            onChange={handleInputChange}
            className='w-full bg-white px-3 py-2 border rounded-md text-black dark:text-white'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black dark:text-white mb-2'>Image</label>
          <input
            type='file'
            name='image'
            onChange={handleFileChange}
            className='w-full bg-white px-3 py-2 border rounded-md text-black dark:text-white'
            required
          />
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded-md'
        >
          Add Tool
        </button>
      </form>

      <div className='grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>No</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Id</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Title</p>
        </div>
        <div className='col-span-2 hidden items-center md:flex'>
          <p className='font-medium'>Type</p>
        </div>
        <div className='col-span-2 hidden items-center md:flex'>
          <p className='font-medium'>Description</p>
        </div>
        <div className='col-span-1 hidden items-center md:flex'>
          <p className='font-medium'>Image</p>
        </div>
      </div>

      {currentTools.map((tool, index) => (
        <div
          className='grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'
          key={tool.id}
        >
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>
              {indexOfFirstTool + index + 1}
            </p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{tool.id}</p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{tool.title}</p>
          </div>
          <div className='col-span-2 hidden items-center md:flex'>
            <p className='text-sm text-black dark:text-white'>{tool.type}</p>
          </div>
          <div className='col-span-2 hidden items-center md:flex'>
            <p className='text-sm text-black dark:text-white'>
              {tool.description}
            </p>
          </div>
          <div className='col-span-1 hidden items-center md:flex'>
            <a
              href={`http://localhost:3000${tool.imageUrl}`} // URL gambar
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={`http://localhost:3000${tool.imageUrl}`} // URL gambar
                alt={tool.title}
                className='w-full h-full object-cover rounded'
              />
            </a>
          </div>
        </div>
      ))}

      {toolData.length > toolsPerPage && (
        <div className='flex justify-between py-4 px-4 md:px-6 2xl:px-7.5'>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50'
          >
            Previous
          </button>
          <span className='px-4 py-2'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(toolData.length / toolsPerPage)}
            className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50'
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Tool;
