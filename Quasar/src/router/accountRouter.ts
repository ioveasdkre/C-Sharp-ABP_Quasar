import LoginPage from 'pages/account/LoginPage.vue';

export enum accountRouterPath {
  accountLogin = '/account/login',
}

export default [
  {
    name: 'accountLogin',
    path: accountRouterPath.accountLogin,
    component: LoginPage,
  },
];
