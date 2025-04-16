import { Table } from "antd";
import { useEffect, useState } from "react";
import 'antd/dist/reset.css';

function App() {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "Year",
      dataIndex: "Year",
      key: "Year",
      sorter: (a, b) => a.Year - b.Year,
    },
    {
      title: "Population",
      dataIndex: "Population",
      key: "Population",
      sorter: (a, b) => a.Population - b.Population,
    },
    {
      title: "Nation",
      dataIndex: "Nation",
      key: "Nation",
    },
  ];
  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result.data);
      
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>US Population by Year</h2>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowkey="year"
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   const [randomNumber, setRandomNumber] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const spin = () => {
//     const randomValue = Math.floor(Math.random() * 100) + 1;
//     setRandomNumber(randomValue);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
     
//         <p>
//           Counter: <span>{count}</span>
//         </p>
//         <div>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//         <div style={{ marginTop: '20px' }}>
//           <p>Random Spin Box</p>
//           <div className="spin-box">
//             <p>{randomNumber}</p>
//           </div>
//           <button onClick={spin}>Spin</button>
//         </div>
      
//       </header>
//     </div>
//   );
// }

// export default App;
