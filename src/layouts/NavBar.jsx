import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/show-books', label: 'Show Books' },
    { path: '/add-book', label: 'Add Book' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">📚 BookShelf</h1>

        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-gray-700 font-medium hover:text-indigo-600 transition ${
                  pathname === link.path ? 'text-indigo-600 underline' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
