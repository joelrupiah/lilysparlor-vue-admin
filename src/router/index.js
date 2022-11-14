import {
  createRouter,
  createWebHistory
} from 'vue-router'
// import store from '../store/index'
import {
  GET_ADMIN_TOKEN_GETTER
} from '../store/storeConstants'

const routes = [{
    path: '/',
    name: 'Dashboard',
    component: () => import('../components/pages/Dashboard.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: () => import('../components/pages/Auth/AdminLogin.vue'),
    meta: {
      requiresAdminVisitor: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/pages/User/Profile.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/permissions-list',
    name: 'PermissionList',
    component: () => import('../components/pages/spatie/permission/PermissionList.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/create-permissions',
    name: 'CreatePermission',
    component: () => import('../components/pages/spatie/permission/CreatePermission.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/edit-permissions/:id',
    name: 'EditPermission',
    component: () => import('../components/pages/spatie/permission/EditPermission.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/roles-list',
    name: 'RoleList',
    component: () => import('../components/pages/spatie/roles/RoleList.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/create-roles',
    name: 'CreateRole',
    component: () => import('../components/pages/spatie/roles/CreateRole.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/edit-roles/:id',
    name: 'EditRole',
    component: () => import('../components/pages/spatie/roles/EditRole.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/categories-list',
    name: 'CategoryList',
    component: () => import('../components/pages/category/CategoryList.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/create-categories',
    name: 'CreateCategory',
    component: () => import('../components/pages/category/CreateCategory.vue'),
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/edit-categories/:id',
    name: 'EditCategory',
    component: () => import('../components/pages/category/EditCategory.vue'),
    meta: {
      requiresAdminAuth: true
    }
  }
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdminAuth)) {
    // if (GET_ADMIN_TOKEN_GETTER) {
    if (!localStorage.getItem('adminData') && from.path !== '/admin-login') {
      next({
        name: 'AdminLogin'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresAdminVisitor)) {
    // if (!GET_ADMIN_TOKEN_GETTER) {
    if (localStorage.getItem('adminData') && to.path !== '/') {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
