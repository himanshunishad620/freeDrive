// import React, { useState } from "react";
// import axios from "axios";
// export default function Storage() {
//   const [file, setFile] = useState();
//   const [loading, setLoading] = useState(false);
//   const data = new FormData();
//   data.append("botToken", "7147572018:AAF_uX7c5FbA_V5DoglL1AuQbtHTWnix1Yg");
//   data.append("chatId", "-1002230179133");

//   const options = {
//     method: "POST",
//     url: "https://unlimited-cloud-storage.p.rapidapi.com/rapidapi/telegram/upload.php",
//     headers: {
//       "x-rapidapi-key": "fe6acbab03mshdb6495c0eea0e81p1f538cjsn5786abddcaef",
//       "x-rapidapi-host": "unlimited-cloud-storage.p.rapidapi.com",
//       ...data.getHeaders(),
//     },
//     data: data,
//   };
//   async function fetchData() {
//     setLoading(true);
//     data.append("file", file);
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   const handleChange = (e) => {
//     setFile(e.target.files[0]);
//   };
//   return (
//     <div>
//       <input type="file" placeholder="file" onChange={handleChange} />
//       <button className="rounded-md border-2 p-3" onClick={fetchData}>
//         {loading ? "Loading..." : ""}
//       </button>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import useFileUpload from "../../hooks/useFileUpload";
import DownloadButton from "../UI/DownloadButton";
import { useNavigate } from "react-router-dom";

function Storage() {
  const [file, setFile] = useState(null);
  const { uploadFile, loading } = useFileUpload();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleUpload = async () => {
    const res = await uploadFile(file);
    console.log(res);
  };
  const navigate = useNavigate();
  return (
    <div className="p-4">
      {/* <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="ml-2 rounded bg-blue-600 px-4 py-1 text-white"
      >
        {loading ? "Loading..." : " Upload to Telegram"}
      </button>
      <button onClick={() => navigate("rootDirectory/1")}>Directory</button> */}
      {/* <a
        href={
          "https://scripts.vaultifier.space/rapidapi/telegram/downloads/file_4307.pdf"
        }
        download={"File.pdf"}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Download
      </a> */}
      {/* <DownloadButton
        fileUrl={
          "https://scripts.vaultifier.space/rapidapi/telegram/downloads/file_4307.pdf"
        }
        // fileName={"FileForDownload.pdf"}
      /> */}
      storage
    </div>
  );
}

export default Storage;
