export default function PartyLedger(){

    const data = [
        {'date': '2025-04-04', 'narration': 'John Doe to Jane Smith', 'debit': 137.26, 'credit': 847.58, 'balance': 4018.68, 'tally': true},
        {'date': '2025-04-26', 'narration': 'Acme Corp to XYZ Ltd', 'debit': 418.5, 'credit': 244.44, 'balance': -3173.13, 'tally': false},
        {'date': '2025-04-03', 'narration': 'John Doe to John Doe', 'debit': 294.14, 'credit': 493.84, 'balance': 2461.24, 'tally': false},
        {'date': '2025-04-15', 'narration': 'XYZ Ltd to Jane Smith', 'debit': 714.52, 'credit': 314.26, 'balance': 2378.24, 'tally': false},
        {'date': '2025-03-30', 'narration': 'Acme Corp to Jane Smith', 'debit': 850.36, 'credit': 911.03, 'balance': 1213.74, 'tally': true},
        {'date': '2025-04-22', 'narration': 'XYZ Ltd to John Doe', 'debit': 800.49, 'credit': 51.98, 'balance': -1479.86, 'tally': true},
        {'date': '2025-04-18', 'narration': 'John Doe to John Doe', 'debit': 16.04, 'credit': 652.66, 'balance': 2307.77, 'tally': false},
        {'date': '2025-04-15', 'narration': 'XYZ Ltd to John Doe', 'debit': 918.05, 'credit': 546.9, 'balance': -3098.66, 'tally': false},
        {'date': '2025-04-01', 'narration': 'Jane Smith to Jane Smith', 'debit': 809.6, 'credit': 468.41, 'balance': 3439.46, 'tally': true},
        {'date': '2025-04-13', 'narration': 'XYZ Ltd to XYZ Ltd', 'debit': 864.64, 'credit': 550.55, 'balance': -4534.85, 'tally': false}
        
      ]
      
    return(
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950 items-center">
            <div className="ml-1 bg-yellow-400 w-35 mt-1 pl-6"><b>Party Ledger</b></div>
        </div>



        {/* component of action-btns left-side*/}
        {/* justify-between is used to make some buttons left and some divs on right i do this by making two separate divs inside parent div which ahs justify-between property. */}

        <div className="h-12 mt-2 mr-1 flex ml-1 bg-indigo-950 justify-between gap-1 ">
            <div className="flex">
            <button className="text-white text-sm px-4 bg-green-400 border-white border-2 m-1 rounded-lg cursor-pointer">Print</button>
            <button className="text-white px-4 bg-purple-600 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Preview</button>
            <button className="text-white px-4 bg-blue-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Peiord</button>
            <button className="text-white px-4 bg-yellow-500 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Full Period</button>
            <button className="text-white px-4 bg-pink-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">A/c Tally</button>
            <button className="text-white px-4 bg-pink-500 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Monday Final</button>
            <button className="text-white px-4 bg-blue-500 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Transfer Entry</button>
            <button className="text-white px-4 bg-pink-700 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Find Value</button>
            <button className="text-white px-4 bg-red-700 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">E-Mail</button>
            <button className="text-white px-4 bg-yellow-600 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm ">Voucher</button>
            <button className="text-white px-3 bg-pink-700 py-1 border-white border-2 m-1 rounded-lg cursor-pointer text-sm">Close</button>
            </div>


         {/* right-side parts  */}
         <div className="flex">
.

            {/* Balance */}
               <div className="h-10 px-1 m-1">
                    <div className="px-9 h-1/2 bg-red-800 text-white">Balance</div>
                    <div className="h-1/2 bg-white "></div>
                </div>
                </div>
        </div>

{/* table */}
        <div className='ml-1'>
            <span className='bg-white pb-1'>
                Party Ledger
            </span>
            <div className="flex bg-white p-2">
                <span className='bg-[#35d2ff] font-bold px-1'>Party : </span>
                <input type='text' className='bg-white border ml-1' />
                <input type='checkbox' name='transferEntries' value='transferEntries' className='ml-50' /> <b className='ml-1'>Show transfer entries</b>
                <input type='checkbox' name='hideMatch' value='hideMatch' className='ml-50' /> <b className="ml-1">Hide match entries</b>
                
            </div>



            <div className='flex'>
                <div className="w-4/5">
                <div className='bg-[#35d2ff]'>
                    <b>Ledger</b>
                </div>
                <table className='w-full table-fixed border-collapse mt-1'>
                    <thead className='bg-[#35d2ff]'>
                        <tr>
                           
                            <th className='border-2 border-black w-[10%] text-left'> <span className='ml-1'>Date</span></th>
                            <th className='border-2 border-black  text-left'><span className='ml-1'>Narration </span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Debit </span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Credit</span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Balance</span></th>
                            <th className='border-2 border-black w-[10%] text-left'><span className='ml-1'>Tally</span></th>

                            </tr>
                    </thead>
                    <tbody>

                    {data.map((item, index) => (
                                <tr key={index} className='bg-white'>
                                <th className='border-1 border-black w-[10%] text-left'> <span className='ml-1'>{item.date}</span></th>
                            <th className='border-1 border-black  text-left'><span className='ml-1'>{item.narration} </span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.debit}</span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.credit}</span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.balance} Cr.</span></th>
                            <th className='border-1 border-black w-[10%] text-left'><span className='ml-1'>{item.tally}</span></th>
                                </tr>
                                
                            ))}
                        
                    </tbody>
                </table>
                </div>
                <div className="w-1/5 bg-[#8c96a0] h-auto m-1">
                    <div className='bg-[#35d2ff]'><b>Monday Final List</b></div>
                    <div>
                        <table className="w-full table-fixed border-collapse">
                            <thead className='bg-[#35d2ff] border-2 border-black'>
                                <tr>
                                    <th className='w-1/2 border-1 border-black text-left'><span className='ml-1'>Date</span></th>
                                    <th className='w-1/2 border-1 border-black text-left'><span className='ml-1'>Balance</span></th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
                
                
            </div>
            
            
        </div>
        </div>
    );
}