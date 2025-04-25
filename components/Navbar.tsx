'use client'; // Only needed in Next.js app router

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [openMaster, setOpenMaster] = useState(false);
  const dropdownRef = useRef(null);

 
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMaster(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#ae94d5] pt-1 pb-1">
      <div className="flex relative">

        <div className="ml-5 relative" ref={dropdownRef}>
          <button
            onClick={() => setOpenMaster(!openMaster)}
            className="text-white px-3 py-2 rounded hover:bg-purple-600 transition"
          >
            Masters
          </button>

          {openMaster && (
            <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Party Master</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Party Groups</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Expense Master</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Company Master</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Select Company</a>
            </div>
          )}
        </div>

        {/* Other Buttons */}
        <button className="ml-5 text-white px-3 py-2 rounded hover:bg-purple-600 transition">Ledgers</button>
        <button className="ml-5 text-white px-3 py-2 rounded hover:bg-purple-600 transition">Settings</button>
      </div>
    </div>
  );
}
