import React from "react";

const GroceryList = ({ data, handleDelete, handleToggle }) => {
 
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Availability</th>
            <th>Toggle Availability</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ color: "yellowgreen" }}>{item.title}</td>
              <td style={item.status ? { color: "green" } : { color: "red" }}>
                {item.status ? "Available" : " Not Available "}
              </td>
              <td>
                <button onClick={() => handleToggle(item.id)}>Toggle</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GroceryList;
