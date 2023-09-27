import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">Constro</h1>
      <ul className="flex space-x-8">
        <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
        <li><a href="#" className="text-white hover:text-blue-500">Site Manager</a></li>
        <li><a href="#" className="text-white hover:text-blue-500">Accountant</a></li>
        <li><a href="#" className="text-white hover:text-blue-500">Supplier</a></li>
        <li><a href="#" className="text-white hover:text-blue-500">Manager</a></li>
        <li><a href="#" className="text-white hover:text-blue-500">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
