import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
function DashBoard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from local storage
    const storedData = localStorage.getItem('authuser');
    if (storedData) {
      setData(storedData); // Update the state with retrieved data
    }
  }, []);


  function logout() {
    // Clear all keys in localStorage
    localStorage.clear();
    console.log("Logout successful, all localStorage data cleared");
    navigate("/login")
  }
  
  return (
    <div>
       <div>
      <h1>About Page</h1>
      {data ? (
        <p>Data from local storage: {data}</p>
      ) : (
        <p>No data available in local storage</p>
      )}
    </div>
    <button onClick={logout}>Clear</button>
    </div>
  )
}

export default DashBoard