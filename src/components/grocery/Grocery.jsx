import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [data, setData] = React.useState([]);
  const [loading,setLoading] =React.useState(false)
  const [error,setError] =React.useState(false)



  const getData = () => {
    fetch(`http://localhost:3000/items`)
    .then((res)=>(res.json()))
    .then((res)=>setData(res))
  }


  React.useEffect(()=>{
    getData()
  },[])

  if(loading){
    return <h2>Loading...</h2>
  }

  if(error){
   return <h2>Error.. Something Went Wrong</h2>
  }
 
  const handleAdd = (itemName) => {
    setLoading(true)
    const payload = {
      title: itemName,
      status : false,
    }
    fetch(`http://localhost:3000/items`,{
      method : "POST",
      body: JSON.stringify(payload),
      headers:{
        "Content-Type" : "Application/json"
      }  
    })
    .then((res)=>res.json())
    .then((res) => getData())
    .catch(()=>{setError(true)})
    .finally(()=>{setLoading(false)})
  };

  const handleToggle = (id) => {
    fetch(`http://localhost:3000/items/${id}`,{
      method : "PATCH",
      body: JSON.stringify({
       status:true
      }),
      headers:{
        "Content-Type" : "Application/json"
      }  
    })
    .then((res)=>res.json())
    .then((res) => getData())
    .catch(()=>{setError(true)})
    .finally(()=>{setLoading(false)})
  }


  const handleDelete = (id) => {
    setLoading(true)
    fetch(`http://localhost:3000/items/${id}`,{
      method : "DELETE",
      headers:{
        "Content-Type" : "Application/json"
      }  
    })
    .then((res)=>res.json())
    .then((res) => getData())
    .catch(()=>{setError(true)})
    .finally(()=>{setLoading(false)})

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
      <GroceryList data={data} handleDelete={handleDelete} handleToggle={handleToggle} />
    </>
  );
};

export default Grocery;
