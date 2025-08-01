import axios from "axios";
import React, { useState } from "react";
import { useBreadcrumbs } from "../contexts/BreadcrumbsContext";

export default function useFileDownload() {
  const [isLoading, setIsLoading] = useState(false);
  const { selected } = useBreadcrumbs();
  //   console.log();
  async function downloadFile(fileId) {
    setIsLoading(true);
    //     const options = {
    //       method: "GET",
    //       url: "https://unlimited-cloud-storage.p.rapidapi.com/rapidapi/telegram/download.php",
    //       params: {
    //         fileId,
    //       },
    //       headers: {
    //         "x-rapidapi-key": "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
    //         "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
    //       },
    //     };
    try {
      const response = await axios.get(
        "https://unlimited-cloud-storage.p.rapidapi.com/rapidapi/telegram/download.php",
        {
          params: { fileId },
          headers: {
            "x-rapidapi-key":
              "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
            "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
          },
          //   responseType: "blob", // <--- important
        },
      );
      //       console.log(response.data);
      //       const fileResponse = await fetch(response.data.file_path);
      //       const blob = await fileResponse.blob();

      //       const url = window.URL.createObjectURL(new Blob([blob]));
      //       console.log(blob);
      const url = response.data.file_path;
      const link = document.createElement("a");
      link.href = `https://resumakebackend.onrender.com/api/directory/downloadFileByUrl?url=${encodeURIComponent(
        url,
      )}&filename=${selected.fileName + selected.ext}`;
      //       link.setAttribute("download", selected.fileName + selected.ext); // you can use fileName from API
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    //     try {
    //       const response = await axios.request(options);
    //       console.log(response.data);
    //       const link = document.createElement("a");
    //       link.href = response.data.file_path;
    //       link.download = "Download";
    //       document.body.appendChild(link);
    //       link.click();
    //       document.body.removeChild(link);
    //       //       window.open(response.data.file_path, "_blank");
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setIsLoading(false);

    //  const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = fileUrl;
    //     link.download = selected.fileName;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   };
    //     setIsLoading(false);
  }
  return { downloadFile, isLoading };
}

// const axios = require('axios');

// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
