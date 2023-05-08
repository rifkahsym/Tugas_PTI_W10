import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Daftar from "./Daftar";
import emojipedia from "./emojipedia";
import "./style.css";

function EmojiApp() {
  return (
    <div>
      <Heading />
      <div className="container">
        {emojipedia.map((emojipedia) => (
          <Daftar
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<EmojiApp />, document.getElementById("root"));
