// route level code-splitting
// this generates a separate chunk (view-[request].js) for this route
// which is lazy-loaded when the route is visited.
const lazyLoad = view => () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)

const routes = [
  {
    path: '/BrandCenter',
    component: lazyLoad('Master'),
    children: [
      {
        path: '/',
        name: 'home',
        component: lazyLoad('Home')
      },
      {
        path: 'detail',
        name: 'detail',
        component: lazyLoad('Detail')
      },
      {
        path: 'demo-pdf',
        name: 'demo-pdf',
        component: lazyLoad('DemoPDF')
      },
      {
        path: 'template',
        name: 'template',
        component: lazyLoad('TemplateLayout')
      },
      {
        path: 'package',
        name: 'package',
        component: lazyLoad('TemplatePackage')
      }
    ]
  },
  {
    path: '*',
    component: lazyLoad('NotFound')
  }
]

export default routes
