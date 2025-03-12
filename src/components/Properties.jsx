import React from "react";

// import Global Context
import { useGlobalContext } from "../context";

// import components
import PropertiesCard from "./PropertiesCard";
import FilterBtn from "./FilterBtn";

const Properties = () => {
  // destructure global context
  const { items, setItems, properties } = useGlobalContext();

  //   console.log(properties.map((property) => property.category));

  //   return an array of unique values
  const filteredBtn = [
    ...new Set(properties.map((property) => property.category)),
  ];
  //   console.log([...new Set(properties.map((property) => property.category))]);

  const filteredItems = (cat) => {
    const newItems = properties.filter((newItem) => newItem.category === cat);
    setItems(newItems);
  };

  return (
    <>
      <section>
        <div className="container">
          <h3 className="text-center text-5xl mb-4">Our Properties</h3>
          {/* buttons  */}
          <FilterBtn
            filteredBtn={filteredBtn}
            filteredItems={filteredItems}
            allData={setItems}
          />

          {/* Properties list  */}
          <PropertiesCard items={items} />
        </div>
      </section>
    </>
  );
};

export default Properties;
