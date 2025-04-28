export default function PartywiseBalances(){
    return(
        
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950">
            <div className="ml-1 bg-yellow-400 w-35 mt-1">Partywise Balances</div>
        </div>
        
        {/* component of action-btns left-side*/}
        {/* justify-between is used to make some buttons left and some divs on right i do this by making two separate divs inside parent div which ahs justify-between property. */}

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
                    <div className="px-4 h-1/2 bg-blue-700 text-white">Stop / Running</div>
                    <div className="h-1/2 bg-white "></div>
                </div>

            {/* Party-groups */}
            <div className="h-10 px-1 m-1">
                    <div className="text-white h-1/2 bg-blue-700 px-4">Party Groups</div>
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





        </div>
    );
}