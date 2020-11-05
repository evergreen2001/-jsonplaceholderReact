import React from "react";
import Title from "../src/component/Title";

import "./App.css";
import UploadForm from "./component/UploadForm";
import ImageGrid from "./component/ImageGrid";

function App() {
  return (
    <div className="App container">
      <Title />
<UploadForm/>

<ImageGrid/>
    </div>
  );
}

export default App;
