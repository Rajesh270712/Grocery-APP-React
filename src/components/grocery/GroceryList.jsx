import React from "react";

const GroceryList = ({ data, handleDelete }) => {
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div style={{ fontSize: "19px", marginBottom: "-25px" }} key={item.id}>
          <h2 style={{ display: "inline-block", color: "yellowgreen" }}>
            {item.itemName}
          </h2>
          {"      "}
          <button onClick={() => handleDelete(item.id)}>DELETE</button>
        </div>
      ))}
    </>
  );
};

export default GroceryList;
