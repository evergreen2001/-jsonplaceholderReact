import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpg"];

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
    <form>
      <input type="file" onChange={handleChange} />

      <div className="output">{error && <div className="err">{error}</div>}
      
      
      {file && <div className="image">{file.name}
      </div>}
      </div>
    
    
    
    </form>
  );
};

export default UploadForm;
