import axios from "axios";
import { useState } from "react";
import appConfig from "../constant/appConfig";
import { toast } from "react-toastify";

export default function useResumeDownload() {
  const [isLoading, setIsLoading] = useState(false);
  //   const { selected } = useBreadcrumbs();
  async function downloadResume() {
    const fileId =
      "BQACAgQAAyEGAASE7dU9AAITOGiSrjoc3USmfcuYB6A4kg01yVeNAAIwGQACEhWZUIdYAUEhmSd3NgQ";
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
        )}&filename=Himanshu_Nishad_MERN_Stack_Developer.pdf`;
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
  return { downloadResume, isLoading };
}
