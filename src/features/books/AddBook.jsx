import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numofBooks = useSelector((state) => state.bookReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: numofBooks + 1, title, author };
    dispatch(addBook(newBook));
    navigate('/show-books', { replace: true });

    // Clear form
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">📖 Add a New Book</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
