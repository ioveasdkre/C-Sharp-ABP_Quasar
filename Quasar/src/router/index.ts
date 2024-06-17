import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { Cookies } from 'quasar';
import { sessionService } from 'src/api/session/sessionService';
import { GetCurrentLoginInformationsResult } from 'src/api/session/result/sessionResult';
import { cookieConfig } from 'src/config/cookieConfig';
import routes from './routes';
import { accountRouterPath } from './accountRouter';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // 全域導航守衛
  Router.beforeEach(async (to, _from, next) => {
    // 檢查目標路由是否需要身份驗證
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      // 調用 checkAuth 函數來進一步驗證用戶身份
      const isCheckAuth = await checkAuth();

      // 如果進一步驗證成功，允許導航到目標路由
      if (isCheckAuth) {
        next();
      } else {
        next(accountRouterPath.accountLogin); // 如果進一步驗證失敗，重定向到登入頁面
      }
    } else {
      next(); // 如果目標路由不需要身份驗證，總是允許導航
    }
  });

  return Router;
});

// 檢查用戶是否已經登錄
const checkAuth = async (): Promise<boolean> => {
  try {
    // 從 Cookie 中獲取 accessToken
    const accessToken = Cookies.get(cookieConfig.accessToken);
    // 檢查 accessToken 是否存在，存在則表示已驗證
    const isAuthenticated = !!accessToken;

    // 如果未通過驗證，則返回 false
    if (!isAuthenticated) {
      return false;
    }

    // 調用 sessionService.GetCurrentLoginInformationsAsync 方法檢查當前登錄信息
    const result: GetCurrentLoginInformationsResult =
      await sessionService.GetCurrentLoginInformationsAsync();

    // 檢查結果，返回 true 表示驗證成功，返回 false 表示驗證失敗
    return result.success && !!result.result && !!result.result.user;
  } catch (error) {
    // 捕獲任何異常，返回 false 表示驗證失敗
    return false;
  }
};
