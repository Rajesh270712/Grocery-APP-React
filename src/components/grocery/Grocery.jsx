import React from "react";
import GroceryInput from "./GroceryInput";
import { v4 as uuid } from "uuid";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [data, setData] = React.useState([]);
  const handleAdd = (itemName) => {
    const payload = {
      itemName,
      id: uuid(),
    };
    setData([...data, payload]);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: "lightblue",
          padding: "14px",
          marginTop: "0px",
          fontFamily: "sans-serif",
          fontSize: "35px",
          color: "blue",
        }}
      >
        Grocery App
      </h1>
      <GroceryInput handleAdd={handleAdd} />
      <GroceryList data={data} handleDelete={handleDelete} />
    </>
  );
};

export default Grocery;
