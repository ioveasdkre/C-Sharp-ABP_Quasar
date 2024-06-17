import { RouteRecordRaw } from 'vue-router';
import accountRouter from './accountRouter';
import homeRouter from './homeRouter';

const routes: RouteRecordRaw[] = [
  ...homeRouter,
  ...accountRouter,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
