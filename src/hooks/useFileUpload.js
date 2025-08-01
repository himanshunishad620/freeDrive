import { useState } from "react";
import axios from "axios";

const useFileUpload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async (file) => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append(
      "botToken",
      "7147572018:AAF_uX7c5FbA_V5DoglL1AuQbtHTWnix1Yg",
    );
    formData.append("document", file);
    formData.append("chatId", "-1002230179133");

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://unlimited-cloud-storage.p.rapidapi.com/rapidapi/telegram/upload.php",
        formData,
        {
          headers: {
            "x-rapidapi-key":
              "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
            "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response.data);
      return response.data.data.result.document;
      //       setStatus("File uploaded successfully.");
    } catch (error) {
      console.error(error);
      return { msg: "Upload failed!" };
      //       setStatus("Upload failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return { uploadFile, isLoading };
};

export default useFileUpload;
