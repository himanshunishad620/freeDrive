import axios from "axios";
import appConfig from "../constant/appConfig";
import { useState } from "react";

const useFileUpload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async (file) => {
    if (!file) {
      alert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("botToken", appConfig.rapidApiBotToken);
    formData.append("document", file);
    formData.append("chatId", "-1002230179133");

    setIsLoading(true);

    try {
      const response = await axios.post(
        appConfig.rapidApiBaseUrl + "rapidapi/telegram/upload.php",
        formData,
        {
          headers: {
            "x-rapidapi-key": appConfig.rapidApiKey,
            "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return file.type.startsWith("audio/")
        ? response.data.data.result.audio
        : response.data.data.result.document;
    } catch (error) {
      console.error(error);
      return { msg: "Upload failed!" };
    } finally {
      setIsLoading(false);
    }
  };

  return { uploadFile, isLoading };
};

export default useFileUpload;
