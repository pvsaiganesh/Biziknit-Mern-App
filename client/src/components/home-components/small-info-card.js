import React from "react";

const SmallInfoCard = ({ number, title, alignment }) => {
  const align = alignment ? alignment : "flex-column text-center";
  const padingright = alignment ? "pe-4" : "";
  return (
    <div className={"d-flex " + align + " pe-3"}>
      <p className={"fs-3 mb-0 " + padingright}>{number}</p>
      <p className="fs-6 mb-0  align-self-center">{title}</p>
    </div>
  );
};

export default SmallInfoCard;
