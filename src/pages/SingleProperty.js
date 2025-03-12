import React from "react";

// import useGlobal Context
import { useGlobalContext } from "../context";

// import react router
import { useParams } from "react-router-dom";
// import { properties } from "../data";

const SingleProperty = () => {
  // const state = useLocation();
  // console.log(state);

  const { items } = useGlobalContext();

  const { id } = useParams();
  console.log(id);

  const singleProp = items.find((property) => property.id === id);
  console.log(singleProp);

  // const { image, title, desc, price } = singleProp;

  return (
    <>
      <section>
        {/* <div className="">
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <article className="summary">{desc}</article>
        <article>{price}</article> */}
      </section>
    </>
  );
};

export default SingleProperty;
