import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Score } from "./Score";
import { Checkbox } from "antd";

function App() {
  let [bg, setBg] = useState(true);
  return (
    <div className="App">
      <Checkbox
        defaultChecked={bg}
        onChange={(v) => {
          setBg(v.target.checked);
        }}
      >
        bg
      </Checkbox>
      <Score bg={bg} />
    </div>
  );
}

export default App;
