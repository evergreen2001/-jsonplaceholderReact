import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpg" , "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);

      setError("PLease select image file png/jpg");
    }
  };
  return (
    <form className="text-center">
    <label>
    
      <input type="file" onChange={handleChange} />
      <span>+</span>

</label>
      <div className="output">
        {error && <div className="err">{error}</div>}

        {file && <div className="image">{file.name}</div>}

        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
