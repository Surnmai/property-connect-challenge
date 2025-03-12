import React from "react";

// import icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const PropertiesCard = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className=" cursor-pointer rounded-md hover:shadow-lg transition-all duration-500 hover:text-white"
          >
            {/* image  */}
            <div className="h-[20rem]">
              <img
                className="h-full w-full object-cover rounded-t-md"
                src={item.img}
                alt={item.title}
              />
            </div>

            {/* price and stars and title   */}
            <div className="p-2 bg-primary rounded-b-md md:text-[1.2rem] ">
              {/* price and stars  */}
              <div className="flex justify-between">
                <h4 className="capitalize">{item.title}</h4>
                {/* stars  */}
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              {/* price  */}
              <p className=""> ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertiesCard;
