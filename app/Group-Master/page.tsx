export default function GroupMaster(){
    return(
         
        <div className="h-screen bg-blue-300"> 
        {/* parent div with bg-blue */}

        {/* component of third bar: */}

        <div className="pt-0.5 pb-0.5 bg-purple-950">
            <div className="ml-1 bg-yellow-400 w-35 mt-1 pl-5">Group Master</div>
        </div>

        {/* 4th-component */}
        <div className="flex">
            {/* left-side */}
            <div className="text-white m-2 px-20 py-4 bg-purple-950">List of Group Master</div>

            {/* right-side */}
            <div className="bg-purple-950 m-2 w-230 ">
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
               <div className="h-10 px-1 m-1 w-40">
                    <div className="px-4 h-1/2 bg-white text-white"></div>
                    <div className="h-1/2 bg-yellow-400 text-center">1/1</div>
                </div>
                </div>
            </div>
        </div>
        </div>
            </div>
    );
}