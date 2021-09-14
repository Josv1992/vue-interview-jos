export const routes = [
  { path: '/', redirect: '/todo/ToDoList' },
  { 
    path: '/todo/ToDoList', 
    component: () => import(/* webpackChunkName: "home" */ './components/ToDoList.vue'),
    name: 'ToDoList',
    meta: {
      title: 'ToDoList',
      metaTags: [
        {
          name: 'To Do List made with Vue.js',
          content: 'A To Do List'
        }
      ]
    }
  },
  { 
    path: '/contact',
    component: () => import(/* webpackChunkName: "contact" */ './components/Contact.vue'),
    name: 'Contact', meta: {
    title: 'Contact',
    meta: {
      title: 'Contact',
      metaTags: [
        {
          name: 'Contact page',
          content: 'Contact page, image'
        }
      ]
    }
  } },
  { 
    path: '/legal',
    component: () => import(/* webpackChunkName: "legal" */ './components/Legal.vue'),
    name: 'Legal', meta: {
    title: 'Legal Info'
  } },
  { 
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ './components/About.vue'),
    name: 'About',
    meta: {
       title: 'About'
  } },
    {
      path: '/aboutme',
      component: () => import(/* webpackChunkName: "aboutme" */ './components/AboutMe.vue'),
      meta: {
        sitemap: {
          ignoreRoute: true
        }
      }
    }
]