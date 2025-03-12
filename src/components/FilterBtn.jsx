import React from "react";

// import Global Context
import { useGlobalContext } from "../context";

const FilterBtn = ({ filteredBtn, allData, filteredItems }) => {
  // destructure global context
  const { properties } = useGlobalContext();

  return (
    <>
      <div className="flex justify-center gap-1 mb-4">
        {/* all btn  */}
        <button
          className="capitalize bg-primary rounded-md px-4 py-2 hover:text-white transition-all duration-500"
          onClick={() => allData(properties)}
        >
          all
        </button>
        {filteredBtn.map((btn) => (
          <button
            className="capitalize bg-primary rounded-md px-4 py-2 hover:text-white transition-all duration-500"
            onClick={() => filteredItems(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterBtn;
