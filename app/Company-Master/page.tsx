export default function CompanyMaster(){

    const da_ta = [{'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},
        {'name':'John'},




   

   
    ]
    return(
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950 items-center">
            <div className="ml-1 bg-yellow-400 w-45 mt-1 pl-6"><b>Company Master</b></div>
        </div>

        {/* 4th-component */}
        <div className="flex">
            {/* left-side */}
            <div className="text-white m-2 px-20 py-4 bg-purple-950">List of Party Master</div>

            {/* right-side */}
            <div className="bg-purple-950 ml-1 mt-2 mb-2 w-340 ">
            <div className="h-12 mt-1 mr-1 flex ml-1 bg-indigo-950 justify-between gap-2 ">
            <div className="flex">
            <button className="text-white px-4 bg-green-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">New</button>
            <button className="text-white px-4 bg-purple-600 border-white border-2 m-1 rounded-lg cursor-pointer">Modify</button>
            <button className="text-white px-4 bg-blue-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Delete</button>
            <button className="text-white px-4 bg-lime-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Find</button>
            <button className="text-white px-4 bg-amber-800 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Close</button>
            </div>


         {/* right-side parts  */}
            <div className="flex">
.

            {/* stop/running */}
               <div className="h-10 px-1 m-1 w-40">
                    <div className="px-4 h-1/2 bg-white text-white"></div>
                    <div className="h-1/2 bg-yellow-400 text-center">3/3</div>
                </div>
                </div>
            </div>
        </div>
        </div>


        <div className="flex h-120 ml-2">
    {/* first box */}
        <div className="bg-[#8c96a0] w-76 mr-3"> 
            {/* <div className="h-10 px-1 m-1 w-73"> */}
                    {/* <div className="px-4 h-5 bg-blue-400"></div>
                    <div className="h-7 bg-white pl-1 border-b-1 border-black">DEFAULT</div>
                    <div className="h-7 bg-white pl-1 border-b-1 border-black">DEFAULT</div>
                    <div className="h-7 bg-white pl-1 border-b-1 border-black">DEFAULT</div>
                    <div className="h-7 bg-white pl-1 border-b-1 border-black">DEFAULT</div>
                    <div className="h-7 bg-white pl-1 border-b-1 border-black">DEFAULT</div>
                    <div className="h-7 bg-white pl-1 border-b-1 border-black">DEFAULT</div> */}
                {/* </div> */}
            {/* <div className="h-10 px-1 m-1 w-73">
                    <div className="px-4 h-5 bg-blue-400"></div>
                    <div className="h-7 bg-white pl-1">DEFAULT</div>
                </div> */}
                 <table className='w-full table-fixed border-collapse mt-1'>
                    <thead className='bg-[#35d2ff]'>
                        <tr>
                           
                            <th className='border-2 border-black w-[10%] text-left'> <span className='ml-1'></span></th>

                            </tr>
                    </thead>
                    <tbody>
                        
                    {da_ta.map((item, index) => (
                                <tr key={index} className='bg-white'>
                                <th className='border-1 border-black w-[10%] text-left'> <span className='ml-1'>{item.name}</span></th>
                                </tr>
                                
                            ))}
                    </tbody>
                    </table>

        </div>

        {/* second-box */}
        <div className="w-335">
            <div className="">
            <span className="bg-white pl-2 pr-2 pb-1"><b>Party Master</b></span>
            </div>
            <div className="w-335 h-114 bg-amber-50">
                {/* <p className="p-2 pl-3"><b>Name:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80   border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Address:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>City:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Mobile:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Ref:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Phone Number:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  /> */}

                
  {/* Row of inputs */}
  <div className="flex space-x-4">
  <p className="p-2 pl-3"><b>Name:</b></p>
    <input type="text" placeholder="Name" className="w-60 mt-2 h-7 border-1 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <p className="p-2 pl-3"><b>Party Grouping:</b></p>
    <select className="w-60 mt-2 h-7 border-1 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Default</option>
            <option>Default-2</option>
          </select>
          <p className="p-2 pl-3"><b>Party Status:</b></p>
    <select className="w-60 mt-2 h-7 border-1 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Running</option>
            <option>Default-2</option>
          </select>
  </div>

                <p className="p-2 pl-3"><b>Address:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>City:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Mobile:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Ref:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                <p className="p-2 pl-3"><b>Phone Number:</b></p>
                <input type="text" name="" placeholder="DEFAULT" id="" className="w-80 border-1 ml-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"  />   


            </div>
        </div>
            </div>
        </div>
    );
}