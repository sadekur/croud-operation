import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import NavBar from '../layouts/NavBar';
import BooksView from '../features/books/BooksView';
import AddBook from '../features/books/AddBook';
import Footer from '../layouts/Footer';
import EditBook from '../features/books/EditBook';

const Index = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content Container */}
        <main className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path='/edit-book/' element={<EditBook />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
