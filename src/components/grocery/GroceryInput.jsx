import React from "react";

const GroceryInput = ({ handleAdd }) => {
  const [item, setItem] = React.useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add item"
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      {""}
      <button
        onClick={() => {
          handleAdd(item);
          setItem("");
        }}
      >
        Add Item
      </button>
    </>
  );
};

export default GroceryInput;
