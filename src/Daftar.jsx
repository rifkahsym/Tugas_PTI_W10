import React from "react";

function Daftar(props) {
  return (
    <div className="daftar">
      <div className="daftar-header">
        <h2>{props.emoji}</h2>
      </div>
      <div className="daftar-body">
        <h3>{props.name}</h3>
        <p>{props.meaning}</p>
      </div>
    </div>
  );
}

export default Daftar;
