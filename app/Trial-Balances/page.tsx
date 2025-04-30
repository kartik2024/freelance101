export default function(){


    const data = [
        {'party': 'my-party','balance': 4018},
        {'party': 'my-party','balance': -3173.13},
        {'party': 'my-party','balance': 2461},
        {'party': 'my-party', 'balance': 1213},
        {'party': 'my-party','balance': 2378},
        {'party': 'my-party','balance': -1479.86},
        {'party': 'my-party','balance': 2307.77},
        {'party': 'my-party','balance': -3098.66},
        {'party': 'my-party','balance': 3439.46},
        {'party': 'my-party','balance': -4534.85},
        {'party': 'my-party','balance': 4018},
        {'party': 'my-party','balance': -3173.13},
        {'party': 'my-party','balance': 2461},
        {'party': 'my-party', 'balance': 1213},
        {'party': 'my-party','balance': 2378},
        {'party': 'my-party','balance': -1479.86},
        {'party': 'my-party','balance': 2307.77},
        {'party': 'my-party','balance': -3098.66},
        {'party': 'my-party','balance': 3439.46},
        {'party': 'my-party','balance': -4534.85},
        {'party': 'my-party','balance': 4018},
        {'party': 'my-party','balance': -3173.13},
        {'party': 'my-party','balance': 2461},
        {'party': 'my-party', 'balance': 1213},
        {'party': 'my-party','balance': 2378},
        {'party': 'my-party','balance': -1479.86},
        {'party': 'my-party','balance': 2307.77},
        {'party': 'my-party','balance': -3098.66},
        {'party': 'my-party','balance': 3439.46},
        {'party': 'my-party','balance': -4534.85},
        {'party': 'my-party','balance': 4018},
        {'party': 'my-party','balance': -3173.13},
        {'party': 'my-party','balance': 2461},
        {'party': 'my-party', 'balance': 1213},
        {'party': 'my-party','balance': 2378},
        {'party': 'my-party','balance': -1479.86},
        {'party': 'my-party','balance': 2307.77},
        {'party': 'my-party','balance': -3098.66},
        {'party': 'my-party','balance': 3439.46},
        {'party': 'my-party','balance': -4534.85, }]

        const data2 = [
            {'party': 'my-party','balance': 4018},
            {'party': 'my-party','balance': -3173.13},
            {'party': 'my-party','balance': 2461},
            {'party': 'my-party', 'balance': 1213},
            {'party': 'my-party','balance': 2378},
            {'party': 'my-party','balance': -1479.86},
            {'party': 'my-party','balance': 2307.77},
            {'party': 'my-party','balance': -3098.66},
            {'party': 'my-party','balance': 3439.46},
            {'party': 'my-party','balance': -4534.85, }]
      

    return(
        <div className="h-full bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="flex pt-0.5 pb-0.5 bg-purple-950">
            <div className="ml-1 bg-green-300 w-40 mt-1"><b>Partywise Balances</b></div>
            <div className="ml-1 bg-yellow-400 w-30 mt-1"><b>Trial Balances</b></div>

        </div>

        
        <div className="h-12 mt-2 mr-1 flex ml-1 bg-indigo-950 justify-between gap-2 ">
            <div className="flex">
            <button className="text-white px-4 bg-green-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Print</button>
            <button className="text-white px-4 bg-purple-600 border-white border-2 m-1 rounded-lg cursor-pointer">Preview</button>
            <button className="text-white px-4 bg-blue-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Period</button>
            <button className="text-white px-4 bg-lime-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Full Period</button>
            <button className="text-white px-4 bg-amber-800 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">E-Mail</button>
            <button className="text-white px-4 bg-pink-500 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Close</button>
            </div>


         {/* right-side parts  */}
            <div className="flex">
.

            {/* stop/running */}
               <div className="h-10 px-1 m-1">
                    <div className="px-4 h-1/2 bg-blue-700 text-white">From Date</div>
                    <div className="h-1/2 bg-white "></div>
                </div>

            {/* Party-groups */}
            <div className="h-10 px-1 m-1 ">
                    <div className="text-white h-1/2 bg-blue-700 px-4">To Date</div>
                    <div className="h-1/2 bg-white ">
                    </div>
                </div>

            {/* net Balance */}
            <div className="h-10 px-1 m-1">
                    <div className="text-white h-1/2 bg-red-900 px-4">Net Balance</div>
                    <div className="h-1/2 bg-white "></div>
                </div>

            </div>
        </div>


        <div className='flex'>
                <div className="w-4/5 ml-1">
                <table className='w-full table-fixed border-collapse mt-1'>
                    <thead className='bg-[#35d2ff]'>
                        <tr>
                           
                            <th className='border-2 border-black w-[10%] text-left'> <span className='ml-1'>Sr.</span></th>
                            <th className='border-2 border-black w-[20%] text-left'><span className='ml-1'>Party </span></th>
                            <th className='border-2 border-black w-[15%] text-left'><span className='ml-1'>Balance</span></th>
                            <th className='border-2 border-black w-[3%] text-left'><span className='ml-1'>T</span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Sr.</span></th>
                            <th className='border-2 border-black w-[20%] text-left'><span className='ml-1'>Party</span></th>
                            <th className='border-2 border-black w-[15%] text-left'><span className='ml-1'>Balance</span></th>
                            <th className='border-2 border-black w-[3%] text-left'><span className='ml-1'>T</span></th>
                            </tr>
                    </thead>




                     <tbody>

                    {data.map((item, index) => (
                                <tr key={index} className='bg-white'>
                                    <th className='border-1 border-black w-[10%] text-left'> <span className='ml-1'>{index+1}</span></th>
                                <th className='border-1 border-black w-[20%] text-left'> <span className='ml-1'>{item.party}</span></th>
                            <th className='border-1 border-black w-[15%] text-left'><span className='ml-1'>{item.balance} </span></th>
                            <th className='border-1 border-black w-[3%] text-left'><span className='ml-1'></span></th>


                            <th className='border-1 border-black w-[10%] text-left'> <span className='ml-1'>{index+1}</span></th>
                                <th className='border-1 border-black w-[20%] text-left'> <span className='ml-1'>{item.party}</span></th>
                            <th className='border-1 border-black w-[15%] text-left'><span className='ml-1'>{item.balance} </span></th>
                            <th className='border-1 border-black w-[3%] text-left'><span className='ml-1'></span></th>


                                </tr>
                                
                            ))}
                        
                    </tbody>
                    </table>


                    <div className="sticky bottom-0 bg-pink-300 flex font-bold border-1 border-black py-1">
    <div className="w-98">Grand Total</div>
    <div className="w-92">-2634267.00 Dr</div>
    <div className="w-67">Grand Total</div>
    <div className="w-40">2634267.00 Cr</div>
  </div>
</div>
                </div>
           
  {/* Grand Total Row (Sticky / Fixed)
  <div className="sticky bottom-0 bg-pink-300 flex justify-between text-sm font-semibold border-t border-black mt-1 px-2 py-1">
    <div className="w-1/2 text-left">Grand Total</div>
    <div className="w-1/2 text-right pr-4">-2634267.00 Dr</div>
    <div className="w-1/2 text-right pr-4">2634267.00 Cr</div>
  </div>
</div> */}

     
</div>
    );
}