'use client'; // Only needed in Next.js app router, // it is used to load your pages on client side(aka CSR)

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  // const [openMaster, setOpenMaster] = useState(false);
  // const [openLedger, setOpenLedger] = useState(false);
  // const dropdownRef = useRef(null);

 
  // useEffect(() => {
  //   function handleClickOutside(e) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setOpenMaster(false);
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);
  
  // Handling outside clicking
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //       setOpenMaster(false);
  //     }
  //   }

  //   // Attach event listener
  //   document.addEventListener("mousedown", handleClickOutside);

  //   // Cleanup the listener when component unmounts
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const [openDropdown, setOpenDropDown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    function handleClickOutside(event: MouseEvent){
      if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
        setOpenDropDown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[]);

  const toggleDropDown = (dropDownName: string)=>{
    if(dropDownName===openDropdown){
      setOpenDropDown(null);
    }
    else{
      setOpenDropDown(dropDownName)
    }
  }

  return (
    <div className="bg-[#ae94d5] pt-1 pb-1">
      <div className="flex relative">

        <div className="ml-5 relative" ref={dropdownRef}>
          <button
            onClick={() => toggleDropDown('first')}
            className="text-black font-bold px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Masters
          </button>

          {openDropdown==='first' && (
            <div className="absolute mt-1 w-48 bg-white border rounded shadow-lg text-sm z-50" ref={dropdownRef}>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Party Master</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Party Groups</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Expense Master</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Company Master</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Select Company</a>
            </div>
          )}
        </div>

        {/* Other Buttons  */}
        <div className='relative text-left ' ref={dropdownRef}>
        <button onClick={()=>toggleDropDown('second')} className="ml-5 text-black font-bold px-3 py-2 rounded hover:bg-purple-600 transition">Ledgers</button>

        {openDropdown==='second' && (
            <div className="absolute mt-1 w-48 bg-white border rounded shadow-lg text-sm z-50" ref={dropdownRef}>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Single Voucher Entry</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Multi Voucher Entry</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Party Ledger</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Party Balances</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Trial Balances</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Commited Amount</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Cash Book</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Day Book</a>
            </div>
          )}
          </div>

          <div className='relative' ref={dropdownRef}>
        <button onClick={()=>toggleDropDown('third')} className="ml-5 text-black font-bold px-3 py-2 rounded hover:bg-purple-600 transition">Settings</button>
        {openDropdown==='third' &&(<div className="text-sm absolute mt-1 w-50 bg-white border rounded shadow-lg z-50" ref={dropdownRef}>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Configurations</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">About Telly</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Hide / Unhide Parties</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Backup</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Registration</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Change Password</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">User Master / Permissions</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Import Master</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Remove all Records</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Remove Data Datewise</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Remove All Data Save Last Balances</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Migrate Data</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Check Update</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Pay Online Payment</a>
            </div>)}
        </div>
      </div>
    </div>
  );
}
