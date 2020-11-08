import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  console.log(progress, url);

  return (
    <motion.div
      className="progressbar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    >
      
    </motion.div>
  );
};

export default ProgressBar;
