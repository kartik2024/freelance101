export default function PartyLedger(){
    return(
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950 items-center">
            <div className="ml-1 bg-yellow-400 w-35 mt-1 pl-6">Party Ledger</div>
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

            {/* stop/running */}
               <div className="h-10 px-1 m-1">
                    <div className="px-9 h-1/2 bg-red-800 text-white">Balance</div>
                    <div className="h-1/2 bg-white "></div>
                </div>
                </div>
        </div>
        </div>
    );
}