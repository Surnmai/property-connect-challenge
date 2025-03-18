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
  // console.log(id);

  const convNum = parseInt(id, 10);
  //   console.log(convNum);

  const singleProp = items.find((property) => property.id === convNum);
  // console.log(singleProp);

  const { img, title, desc, price } = singleProp;

  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <img src={img} alt={title} />
          </div>
          <h1>{title}</h1>
          <article className="">{desc}</article>
          <article>{price}</article>
          {/* Single Property Page */}
        </div>
      </section>
    </>
  );
};

export default SingleProperty;
