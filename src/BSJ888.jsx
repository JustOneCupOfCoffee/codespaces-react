import { useState } from "react";

function Item({ name }) {
  const [digits, setDigits] = useState([0, 0, 0]);

  function rollDigits() {
    const newDigits = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    setDigits(newDigits);
  }

  return (
    <li>
      {name}: {digits.join("")}
      <br />
      <button onClick={rollDigits}>Roll</button>
    </li>
  );
}

export default function BSJ888() {
  return (
    <>
      <h1>BSJ888</h1>
      <ol>
        <Item name="Number Rolls" />
        <img src="issac.jpg" width="350" height="300" alt="Isaac Newton" />
      </ol>
    </>
  );
}
