import axios from "axios";

// APIクライアント
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

// レスポンスインターセプター
apiClient.interceptors.response.use((response) => {
  return response.data;
});
