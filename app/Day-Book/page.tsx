export default function DayBook(){
    const data = [
        {'date': '2025-04-04', 'account': 'John Doe', 'narration':'John Doe', 'debit': 137.26, 'credit': 847.58, 'balance': 4018.68, 'tally': true},
        {'date': '2025-04-26', 'account': 'Acme Corp','narration':'John Doe', 'debit': 418.5, 'credit': 244.44, 'balance': -3173.13, 'tally': false},
        {'date': '2025-04-03', 'account': 'John Doe to John Doe', 'narration':'John Doe', 'debit': 294.14, 'credit': 493.84, 'balance': 2461.24, 'tally': false},
        {'date': '2025-04-15', 'account': 'XYZ Ltd to Jane Smith','narration':'John Doe', 'debit': 714.52, 'credit': 314.26, 'balance': 2378.24, 'tally': false},
        {'date': '2025-03-30', 'account': 'Acme Corp to Jane Smith', 'narration':'John Doe', 'debit': 850.36, 'credit': 911.03, 'balance': 1213.74, 'tally': true},
        {'date': '2025-04-22', 'account': 'XYZ Ltd to John Doe', 'narration':'John Doe', 'debit': 800.49, 'credit': 51.98, 'balance': -1479.86, 'tally': true},
        {'date': '2025-04-18', 'account': 'John Doe to John Doe', 'narration':'John Doe', 'debit': 16.04, 'credit': 652.66, 'balance': 2307.77, 'tally': false},
        {'date': '2025-04-15', 'account': 'XYZ Ltd to John Doe', 'narration':'John Doe', 'debit': 918.05, 'credit': 546.9, 'balance': -3098.66, 'tally': false},
        {'date': '2025-04-01', 'account': 'Jane Smith to Jane Smith', 'narration':'John Doe', 'debit': 809.6, 'credit': 468.41, 'balance': 3439.46, 'tally': true},
        {'date': '2025-04-13', 'account': 'XYZ Ltd to XYZ Ltd', 'narration':'John Doe', 'debit': 864.64, 'credit': 550.55, 'balance': -4534.85, 'tally': false}
      ]
    return(
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950">
            <div className="ml-1 bg-yellow-400 w-35 mt-1 pl-7"><b>Day Book</b></div>

        </div>

        <div className="h-12 mt-2 mr-1 flex ml-1 bg-indigo-950 justify-between gap-2 ">
            <div className="flex">
            <button className="text-white px-4 bg-green-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Print</button>
            <button className="text-white px-4 bg-purple-600 border-white border-2 m-1 rounded-lg cursor-pointer">Preview</button>
            <button className="text-white px-4 bg-blue-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Period</button>
            <button className="text-white px-4 bg-lime-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">5 Columns</button>
            <button className="text-white px-4 bg-amber-800 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">E-Mail</button>
            <button className="text-white px-4 bg-pink-500 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">Closes</button>
            </div>


         {/* right-side parts  */}
            <div className="flex">
.

            {/* stop/running */}
               <div className="h-10 px-1 m-1">
                    <div className="px-4 h-1/2 bg-green-600 text-white">From Date</div>
                    <div className="h-1/2 bg-white "></div>
                </div>

            {/* Party-groups */}
            <div className="h-10 px-1 m-1">
                    <div className="text-white h-1/2 bg-green-600 px-4">To Date</div>
                    <div className="h-1/2 bg-white ">
                    </div>
                </div>

            {/* net Balance */}
            <div className="h-10 px-1 m-1">
                    <div className="text-white h-1/2 bg-green-600 px-4">Total Balances</div>
                    <div className="h-1/2 bg-white ">NIL</div>
                </div>

            </div>
        </div>



        {/* table */}
        <table className='w-full table-fixed border-collapse mt-4 '>
                    <thead className='bg-[#35d2ff]'>
                        <tr>
                           
                            <th className='border-2 border-black w-[10%] text-left'> <span className='ml-1'>Date</span></th>
                            <th className='border-2 border-black w-[20%] text-left'><span className='ml-1'>Account</span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Narration</span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Debit</span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Credit</span></th>
                            </tr>
                    </thead>
                    <tbody>

                    {data.map((item, index) => (
                                <tr key={index} className='bg-white'>
                                <th className='border-1 border-black w-[10%] text-left'> <span className='ml-1'>{item.date}</span></th>
                            <th className='border-1 border-black w-[20%] text-left'><span className='ml-1'>{item.account} </span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.narration}</span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.debit}</span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.credit}</span></th>
                                </tr>
                                
                            ))}
                        
                    </tbody>
                </table>

        </div>
    );
}