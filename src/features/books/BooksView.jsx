import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './BookSlice';
import { Link } from 'react-router-dom';

const BooksView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(id));
    }
  };

  // const handleEdit = (id) => {
  //   alert(`Edit book with ID: ${id}`);
  //   // You can navigate to edit page or open a modal here
  // };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">📚 Book List</h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Author</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{book.title}</td>
                  <td className="px-6 py-4 text-gray-600">{book.author}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <Link
                      // to={`/edit-book/${book.id}`}
                      to="/edit-book" state= {{id: book.id, title: book.title, author: book.author}}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
                    >
                       <button
                        // onClick={() => handleEdit(book.id)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded text-sm"
                      >
                        Edit
                      </button>
                    </Link>
                   
                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BooksView;
