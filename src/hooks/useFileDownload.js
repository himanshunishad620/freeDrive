import axios from "axios";
import appConfig from "../constant/appConfig";
import { useState } from "react";
import { useBreadcrumbs } from "../contexts/BreadcrumbsContext";
import { toast } from "react-toastify";

export default function useFileDownload() {
  const [isLoading, setIsLoading] = useState(false);
  const { selected } = useBreadcrumbs();
  async function downloadFile(fileId) {
    setIsLoading(true);
    try {
      const response = await axios.get(
        appConfig.rapidApiBaseUrl + "rapidapi/telegram/download.php",
        {
          params: { fileId },
          headers: {
            "x-rapidapi-key": appConfig.rapidApiKey,
            "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
          },
        },
      );
      const url = response.data.file_path;
      const link = document.createElement("a");
      link.href =
        appConfig.apiBaseUrl +
        `api/directory/downloadFileByUrl?url=${encodeURIComponent(
          url,
        )}&filename=${selected.fileName + selected.ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Starting Download!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }
  return { downloadFile, isLoading };
}
