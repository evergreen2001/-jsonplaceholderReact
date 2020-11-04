import { useState, useEffect } from "react";

import { storage, timestamp } from "../firebase/config";

import { firestore } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);

  const [error, setError] = useState(null);

  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
