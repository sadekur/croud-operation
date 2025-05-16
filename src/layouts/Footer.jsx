import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BookShelf. All rights reserved.</p>
        <p className="text-sm mt-2 md:mt-0">Made with ❤️ by Sadekur Rahman</p>
      </div>
    </footer>
  );
};

export default Footer;
