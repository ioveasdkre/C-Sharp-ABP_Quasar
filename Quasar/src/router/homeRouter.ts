// import MainLayout from 'layouts/MainLayout.vue';
import IndexLayout from 'layouts/IndexLayout.vue';
import IndexPage from 'pages/IndexPage.vue';

export enum homeRouterPath {
  homeIndex = '/',
}

export default [
  {
    name: 'homeIndex',
    path: homeRouterPath.homeIndex,
    component: IndexLayout,
    children: [{ path: '', component: IndexPage }],
    meta: { requiresAuth: true },
  },
];
