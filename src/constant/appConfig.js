const appConfig = {
  apiBaseUrl: import.meta.env.VITE_BASE_URL,
  rapidApiBaseUrl: import.meta.env.VITE_RAPID_API_BASE_URL,
  rapidApiKey: import.meta.env.VITE_RAPID_API_X_RAPID_API_KEY,
  rapidApiBotToken: import.meta.env.VITE_RAPID_API_BOT_TOKEN,
  rapidApiForDownload: import.meta.env.VITE_RAPID_API_FILE_DOWNLOAD_URL,
  rapidApiForUpload: import.meta.env.VITE_RAPID_API_FILE_UPLOAD_URL,
};
export default appConfig;
