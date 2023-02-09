import React, { useEffect, useState } from "react";
import Table from "./Table";

const data_hash = {
  lab: [
    {
      key: "0000gia",
      total_amount: "$2,106,690.00",
      name: "GIA",
      count: 200,
    },
    {
      key: "0003igi",
      total_amount: "$6,733.00",
      name: "IGI",
      count: 11,
    },
  ],
  shape: [
    {
      key: "0000round",
      total_amount: "$1,843,431.00",
      name: "Round",
      count: 178,
    },
    {
      key: "0001princess",
      total_amount: "$900,407.00",
      name: "Princess",
      count: 7,
    },
    {
      key: "0002pear",
      total_amount: "$15,865.00",
      name: "Pear",
      count: 4,
    },
    {
      key: "0003oval",
      total_amount: "$450,518.00",
      name: "Oval",
      count: 7,
    },
    {
      key: "0004cushion",
      total_amount: "$27,202.00",
      name: "Cushion",
      count: 5,
    },
    {
      key: "0008cushion_modified",
      total_amount: "$27,202.00",
      name: "Cushion Modified",
      count: 5,
    },
    {
      key: "0008radient",
      total_amount: "$15,865.00",
      name: "Radient",
      count: 5,
    },
  ],
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    for (let key in data_hash) {
      console.log(key);
      setData((prevData) => [
        ...prevData,
        <Table key={key} id={key} currentdata={data_hash[key]} />,
      ]);
    }
  }, []);

  return <div className="App">{data}</div>;
}

export default App;
