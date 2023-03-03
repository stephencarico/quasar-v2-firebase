
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Dashboard', path: '', component: () => import('pages/IndexPage.vue') }
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { name: 'Login', path: 'login', component: () => import('pages/LoginPage.vue') }
    ],
    meta: {
      loginFlow: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
