export default function MultipleVoucher(){
    return(
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950 items-center">
            <div className="ml-1 bg-yellow-400 w-40 mt-1 pl-1"><b>Multiple-Voucher</b></div>
        </div>

        <div className="h-12 mt-2 mr-1 flex ml-1 bg-indigo-950 justify-between gap-2 ">
            <div className="flex">
            <button className="text-white px-5 bg-green-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">New</button>
            <button className="text-white px-5 bg-purple-600 border-white border-2 m-1 rounded-lg cursor-pointer">Modify</button>
            <button className="text-white px-5 bg-blue-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Delete</button>
            <button className="text-white px-5 bg-lime-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Find</button>
            <button className="text-white px-5 bg-amber-800 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Close</button>
            </div>


         {/* right-side parts  */}
            <div className="flex">
.              

            {/* net Balance */}
            <div className="h-10 px-1 m-1 w-50 text-center">
                    <div className="h-1/2 bg-white px-4"></div>
                    <div className="h-1/2 bg-yellow-300 "><b>34/34</b></div>
                </div>

            </div>
        </div>

        <div className='ml-1 mt-1'>
            <span className='bg-white pb-1 px-4'>
                <b>Multiple Voucher</b>
            </span>
            </div>


            {/* <div className="bg-amber-50 h-full m-1">
                <div className="bg-blue-500 py-2 w-70 text-center ml-2"><b>Monday - April 14, 2025</b></div>
            </div> */}


    <div className="min-h-screen bg-yellow-50 p-6 text-10 font-sans">
      {/* Header */}
      <div className="bg-cyan-400 text-black font-bold text-center py-2 rounded-t-md">
        Monday - April 14, 2025
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 bg-white p-4 shadow border">
        <div>
          <label className="block font-medium mb-1">Date:</label>
          <input
            type="date"
            defaultValue="2025-04-14"
            className="border px-2 py-1 rounded w-40"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Type:</label>
          <select className="border px-2 py-1 rounded w-32">
            <option>Cash</option>
            <option>Bank</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4 border">
        <table className="min-w-full text-center table-auto border-collapse bg-gray-100">
          <thead className="bg-black text-white">
            <tr>
              <th className="border px-2 py-1">S.No</th>
              <th className="border px-2 py-1">Party</th>
              <th className="border px-2 py-1">Narration</th>
              <th className="border px-2 py-1">Debit</th>
              <th className="border px-2 py-1">Credit</th>
            </tr>
          </thead>
          <tbody className="bg-gray-300 text-black">
            <tr className="bg-blue-200">
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">VICKY BARETA</td>
              <td className="border px-2 py-1">VKS81625 +594552</td>
              <td className="border px-2 py-1">0.00</td>
              <td className="border px-2 py-1">148638.00</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">GOPAL</td>
              <td className="border px-2 py-1">VKS81625 +594552</td>
              <td className="border px-2 py-1">95128.00</td>
              <td className="border px-2 py-1">0.00</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">KS PTL</td>
              <td className="border px-2 py-1">KSNAV135 +45359</td>
              <td className="border px-2 py-1">0.00</td>
              <td className="border px-2 py-1">15875.00</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">GOPAL</td>
              <td className="border px-2 py-1">KSNAV135 +45359</td>
              <td className="border px-2 py-1">7257.00</td>
              <td className="border px-2 py-1">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-2">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>

      {/* Totals Row */}
      <div className="flex justify-between mt-6 bg-blue-950 text-white px-6 py-2 font-semibold rounded">
        <div className="bg-yellow-400 text-black px-4 py-1 rounded">
          Difference: -62128.00 <span className="text-blue-900">Dr</span>
        </div>
        <div className="flex space-x-6">
          <div className="bg-yellow-400 text-black px-4 py-1 rounded">102385.00</div>
          <div className="bg-yellow-400 text-black px-4 py-1 rounded">164513.00</div>
        </div>
      </div>
    </div>
    </div>
  );
}; 