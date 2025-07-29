// import { useState } from "react";
// import axios from "axios";
// import { useBreadcrumbs } from "../contexts/BreadcrumbsContext";

// const useFileDownload = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { selected } = useBreadcrumbs();
//   const downloadFile = async () => {
//     const options = {
//       method: "GET",
//       url: "https://unlimited-cloud-storage.p.rapidapi.com/rapidapi/telegram/download.php",
//       params: {
//         fileId: selected.fileUploadId,
//       },
//       headers: {
//         "x-rapidapi-key": "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
//         "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
//       },
//     };

//     //    async function fetchData() {
//     try {
//       const response = await axios.get(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally
//     // }

// //     try {
// //       const response = await axios.post(
// //         "https://unlimited-cloud-storage.p.rapidapi.com/rapidapi/telegram/upload.php",
// //         formData,
// //         {
// //           headers: {
// //             "x-rapidapi-key":
// //               "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
// //             "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
// //             "Content-Type": "multipart/form-data",
// //           },
// //         },
// //       );

// //       console.log(response.data.data.result.document);
// //       return response.data.data.result.document;
// //       //       setStatus("File uploaded successfully.");
// //     } catch (error) {
// //       console.error(error);
// //       return { msg: "Upload failed!" };
// //       //       setStatus("Upload failed.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

//   return { downloadFile, isLoading };
// };

// export default useFileDownload;
