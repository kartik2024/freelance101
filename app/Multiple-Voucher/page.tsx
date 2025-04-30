'use client';
import { useState } from "react";

export default function MultipleVoucher() {
  const [rows, setRows] = useState([
    { sno: 1, party: "VICKY BARETA", narration: "VKS81625 +594552", debit: "0.00", credit: "148638.00" },
    { sno: 2, party: "GOPAL", narration: "VKS81625 +594552", debit: "95128.00", credit: "0.00" },
    { sno: 3, party: "KS PTL", narration: "KSNAV135 +45359", debit: "0.00", credit: "15875.00" },
    { sno: 4, party: "GOPAL", narration: "KSNAV135 +45359", debit: "7257.00", credit: "0.00" }
  ]);

  const [formData, setFormData] = useState({
    party: "",
    narration: "",
    debit: "",
    credit: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = () => {
    if (!formData.party || !formData.narration || (!formData.debit && !formData.credit)) return;

    const newRow = {
      sno: rows.length + 1,
      party: formData.party,
      narration: formData.narration,
      debit: formData.debit || "0.00",
      credit: formData.credit || "0.00"
    };

    setRows([...rows, newRow]);
    setFormData({ party: "", narration: "", debit: "", credit: "" });
  };

  const totalDebit = rows.reduce((acc, row) => acc + parseFloat(row.debit), 0);
  const totalCredit = rows.reduce((acc, row) => acc + parseFloat(row.credit), 0);
  const difference = (totalDebit - totalCredit).toFixed(2);
  const differenceType = parseFloat(difference) > 0 ? "Dr" : "Cr";

  return (
    <div className="h-screen bg-blue-300">
      <div className="pt-0.5 pb-0.5 bg-purple-950 items-center">
        <div className="ml-1 bg-yellow-400 w-40 mt-1 pl-1">
          <b>Multiple-Voucher</b>
        </div>
      </div>

      <div className="h-12 mt-2 mr-1 flex ml-1 bg-indigo-950 justify-between gap-2">
        <div className="flex">
          <button className="text-white px-5 bg-green-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">
            New
          </button>
          <button className="text-white px-5 bg-purple-600 border-white border-2 m-1 rounded-lg cursor-pointer">
            Modify
          </button>
          <button className="text-white px-5 bg-blue-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">
            Delete
          </button>
          <button className="text-white px-5 bg-lime-400 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">
            Find
          </button>
          <button className="text-white px-5 bg-amber-800 py-1 border-white border-2 m-1 rounded-lg cursor-pointer">
            Close
          </button>
        </div>

        {/* right-side parts */}
        <div className="flex">
          {/* net Balance */}
          <div className="h-10 pb-1 px-1 m-1 w-50 text-center">
            <div className="h-1/2 mb-1 bg-white px-4"></div>
            <div className="h-1/2 flex items-center justify-center bg-yellow-300">
              <b>34/34</b>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-1 mt-1">
        <span className="bg-white pb-1 px-4">
          <b>Multiple Voucher</b>
        </span>
      </div>
 
      <div className="min-h-screen bg-yellow-50 p-6 text-10 font-sans">
        {/* Header */}
        <div className="bg-cyan-400 text-black font-bold text-center py-2 rounded-t-md">
          Monday - April 14, 2025
        </div>

        
        <div className="flex space-x-6 mt-4 bg-[#fffbea] px-4 py-3 rounded shadow border w-fit">
          <div>
            <label className="block font-medium text-sm mb-1">Date:</label>
            <input
              type="date"
              defaultValue="2025-04-14"
              className="border px-2 py-1 rounded w-40 text-sm"
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Type:</label>
            <select className="border px-2 py-1 rounded w-32 text-sm">
              <option>Cash</option>
              <option>Bank</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4 border">
          <table className="min-w-full text-center table-auto border-collapse bg-gray-100">
            <thead className="bg-[#021429] text-white">
              <tr>
                <th className="border px-2 py-1">S.No</th>
                <th className="border px-2 py-1">Party</th>
                <th className="border px-2 py-1">Narration</th>
                <th className="border px-2 py-1">Debit</th>
                <th className="border px-2 py-1">Credit</th>
              </tr>
            </thead>
            <tbody className="bg-gray-300 text-black">
              {/* Input Row */}
              <tr className="bg-white">
                <td className="border px-2 py-1 text-gray-500">New</td>
                <td className="border px-2 py-1">
                  <input
                    type="text"
                    name="party"
                    value={formData.party}
                    onChange={handleChange}
                    placeholder="Party"
                    className="w-full px-1 py-0.5 text-sm rounded border"
                  />
                </td>
                <td className="border px-2 py-1">
                  <input
                    type="text"
                    name="narration"
                    value={formData.narration}
                    onChange={handleChange}
                    placeholder="Narration"
                    className="w-full px-1 py-0.5 text-sm rounded border"
                  />
                </td>
                <td className="border px-2 py-1">
                  <input
                    type="number"
                    name="debit"
                    value={formData.debit}
                    onChange={handleChange}
                    placeholder="Pay (Dr)"
                    className="w-full px-1 py-0.5 text-sm rounded border"
                  />
                </td>
                <td className="border px-2 py-1 flex items-center gap-2">
                  <input
                    type="number"
                    name="credit"
                    value={formData.credit}
                    onChange={handleChange}
                    placeholder="Receive (Cr)"
                    className="w-full px-1 py-0.5 text-sm rounded border"
                  />
                  <button
                    onClick={handleAdd}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-0.5 rounded text-sm"
                  >
                    Add
                  </button>
                </td>
              </tr>
              
              {rows.map((row) => (
                <tr key={row.sno}>
                  <td className="border px-2 py-1">{row.sno}</td>
                  <td className="border px-2 py-1">{row.party}</td>
                  <td className="border px-2 py-1">{row.narration}</td>
                  <td className="border px-2 py-1">{row.debit}</td>
                  <td className="border px-2 py-1">{row.credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="fixed bottom-4 left-4 right-4 flex justify-between bg-blue-950 text-white px-6 py-2 font-semibold rounded shadow-lg">
          <div className="bg-yellow-400 text-black px-4 py-1 rounded">
            Difference: {Math.abs(parseFloat(difference)).toFixed(2)}{" "}
            <span className="text-blue-900">{differenceType}</span>
          </div>
          <div className="flex space-x-6">
            <div className="bg-yellow-400 text-black px-4 py-1 rounded">
              {totalDebit.toFixed(2)}
            </div>
            <div className="bg-yellow-400 text-black px-4 py-1 rounded">
              {totalCredit.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
