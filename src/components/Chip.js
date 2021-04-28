import React, { useState } from "react";
import chipsImg from "../assets/Chips.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Chip.css";

const Chips = () => {
  const [bags, setBags] = useState([]);

  const handleClick = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags((prevBags) => [...prevBags, { x, y }]);
  };

  const b = bags.map((bag, i) => (
    <img
      key={i}
      alt="Bag o Chips"
      src={chipsImg}
      style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      className="bag"
    />
  ));

  return (
    <div className="Chips">
      <Message>
        <h1>Bags eaten : {bags.length}</h1>
        <button onClick={handleClick}>MORE</button>
        <h1></h1>
      </Message>
      {b}
    </div>
  );
};

export default Chips;
