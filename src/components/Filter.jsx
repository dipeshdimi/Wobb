import { useState } from "react";
import { VscSettings } from "react-icons/vsc";

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <div 
    className="flex items-center gap-2 mt-4 pl-4 overflow-x-auto pb-3 border-b-8 border-gray-300"
    style={{ scrollbarWidth: 'none' }}
    >
      <button className="flex items-center gap-1 h-full border border-gray-800 rounded-lg px-3 py-[6px] box-content">
        <VscSettings />
        <span className="text-xs">▼</span>
      </button>
      {
        ['All', 'Applied', 'Hired', 'Closed'].map((filter) =>
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-[6px] text-[14px] sm:text-[12px] font-semibold text-gray-800 text-nowrap rounded-[10px] border ${filter === selectedFilter ? 'bg-blue-50 border-blue-700' : 'bg-transparent border-gray-800'}`}
          >
            {filter} ({filter === 'All' ? 10 : 0})
          </button>
        )
      }
    </div>
  );
};