import React from "react";
/*import App from "./App";*/

function emojis(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          <span>{props.emoji}</span>
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default emojis;
