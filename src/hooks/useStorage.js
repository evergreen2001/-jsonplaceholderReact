import { useState, useEffect } from "react";

import { storage } from "../firebase/config";

const useStorage = (file) => {
  const [progess, setProgess] = useState(0);

  const [error, setError] = useState(null);

  const [url, setUrl] = useState(null);

  useEffect(() => {
 

    const storageRef = storage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferres / snap.totalBytes) * 100;

        setProgess(percent);
      },
      (err) => {
        setError(err);
      }
    ),
      async () => {
        const url = await storageRef.getDownloadURl();
        setUrl(url);
      };
  }, [file]);

  // return { progress, url, error };
};

export default useStorage;
