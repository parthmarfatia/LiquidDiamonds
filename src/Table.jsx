import React, { useState } from "react";

const Table = (props) => {
  const { currentdata, id } = props;

  const displayData = currentdata.map((data, i) => {
    let amount = parseInt(data.total_amount.slice(1, -3).split(",").join(""));
    return { ...data, amount };
  });

  const arr = currentdata.map((data, i) => {
    let amount = parseInt(data.total_amount.slice(1, -3).split(",").join(""));
    return amount;
  });

  arr.sort((a, b) => b - a);

  function exp(i) {
    let percent = (arr[i] / (arr[0] - arr[arr.length - 1])) * 100;
    console.log(percent);
    return percent;
  }

  const tableRow = displayData.map((data, i) => {
    const { name, count, total_amount, amount } = data;

    const calcVal = 255;
    let calcColorGreen = calcVal * exp(arr.indexOf(amount)); // 0 -> 255
    // const calcColorRed =
    //   arr.indexOf(amount) === 0
    //     ? 0
    //     : arr.indexOf(amount) === arr.length - 1
    //     ? 255
    //     : arr.calcVal * exp(arr.indexOf(amount)); // 0 -> 255

    let calcColorRed = (calcVal * (100 - exp(arr.indexOf(amount)))) / 100; // 0 -> 255
    console.log(calcColorGreen);
    // const calcColorGreen =
    //   arr.indexOf(amount) === arr.length - 1
    //     ? 0
    //     : arr.indexOf(amount) === 0
    //     ? 255
    //     : calcVal * exp(arr.length - arr.indexOf(amount)); // 0 -> 255

    if (arr.indexOf(amount) === 0) {
      calcColorGreen = 255;
      calcColorRed = 0;
      console.log("inside");
    } else if (arr.indexOf(amount) === arr.length - 1) {
      calcColorGreen = 0;
      calcColorRed = 255;
    }

    const Color = `rgba(${calcColorRed}, ${calcColorGreen}, 0, 1)`;

    return (
      <tr key={i}>
        <td>{name}</td>
        <td>{count}</td>
        <td style={{ backgroundColor: Color }}>{total_amount}</td>
      </tr>
    );
  });

  return (
    <div className="table--container">
      <h2>{id}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
