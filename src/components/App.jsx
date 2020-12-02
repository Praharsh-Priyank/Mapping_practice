import React from "react";
import Emojipedia from "../emojipedia.js";
import Emojis from "./emojis";

function emoji(emoji) {
  return (
    <Emojis
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(emoji)}</dl>
    </div>
  );
}

export default App;
