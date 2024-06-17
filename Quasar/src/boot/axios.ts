import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { envConfig } from 'src/config/envConfig';
import { Cookies } from 'quasar';
import { cookieConfig } from 'src/config/cookieConfig';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({
  baseURL: envConfig.apiUrl,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // 這裡 accessToken 從 pinia 撈
    const accessToken = Cookies.get(cookieConfig.accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // console.log('axiosConfig', config);
    return config;
  },
  (error) => {
    // console.log('error', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    // console.log('response', response);
    return response;
  },
  (error) => {
    // console.log('error', error);
    return Promise.reject(error);
  },
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
