import React from "react";

function DownloadButton({ fileUrl }) {
  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Try to get file extension from the blob type
      let extension = blob.type.split("/")[1] || "file";
      let fileName = `downloaded-file.${extension}`;

      // Try to get filename from the Content-Disposition header if present
      const contentDisposition = response.headers.get("Content-Disposition");
      if (contentDisposition && contentDisposition.includes("filename=")) {
        fileName = contentDisposition
          .split("filename=")[1]
          .replace(/["']/g, "");
      }

      // Trigger download without opening new tab
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Download File
    </button>
  );
}

export default DownloadButton;
