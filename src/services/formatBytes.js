export default function formatBytesSplit(bytes) {
  if (bytes === 0) return { value: 0, unit: "Bytes" };

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return {
    value: parseFloat((bytes / Math.pow(k, i)).toFixed(2)),
    unit: sizes[i],
    percent: ((bytes / 5368709120) * 100).toFixed(2) + "%",
  };
}
