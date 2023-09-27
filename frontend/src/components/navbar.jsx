import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">Constro</h1>
      <ul className="flex space-x-8">
        <li><a href="#" className="text-white">Home</a></li>
        <li><a href="#" className="text-white">Site Manager</a></li>
        <li><a href="#" className="text-white">Accountant</a></li>
        <li><a href="#" className="text-white">Supplier</a></li>
        <li><a href="#" className="text-white">Manager</a></li>
        <li><a href="#" className="text-white">Login</a></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
