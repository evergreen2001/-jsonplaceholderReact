import React ,{useState}from "react";
import Title from "../src/component/Title";
import Modal from "../src/component/Modal";


import "./App.css";
import UploadForm from "./component/UploadForm";
import ImageGrid from "./component/ImageGrid";

function App() {



  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div className="App container">
      <Title />
<UploadForm/>

<ImageGrid setSelectedImg={setSelectedImg} />
{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }




    </div>
  );
}

export default App;
