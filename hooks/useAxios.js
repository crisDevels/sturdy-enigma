import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import axios from "axios";

export const useAxios = () => {
  const app = useAppBridge();
  const instance = axios.create();
  instance.interceptors.request.use(function (config) {
    return getSessionToken(app)
      .then(token => {
        config.headers["Authorization"] = `Bearer ${token}`
        return config;
      })

  });
  return [instance];
}
