// import ToDoList from './components/ToDoList.vue';
// import Contact from './components/Contact.vue';
// import Legal from './components/Legal.vue';
// import About from './components/About.vue';
// import AboutMe from './components/AboutMe';

export const routes = [
  { path: '/', redirect: '/ToDoList' },
  { 
    path: '/ToDoList', 
    component: () => import(/* webpackChunkName: "home" */ './components/ToDoList.vue'),
    // component: ToDoList,
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
  { path: '/contact',
    component: () => import(/* webpackChunkName: "contact" */ './components/Contact.vue'),
    // component: Contact,
    name: 'Contact', meta: {
    title: 'Contact'
  } },
  { path: '/legal',
    component: () => import(/* webpackChunkName: "legal" */ './components/Legal.vue'),
    // component: Legal,
    name: 'Legal', meta: {
    title: 'Legal Info'
  } },
  { path: '/about',
    component: () => import(/* webpackChunkName: "about" */ './components/About.vue'),
    // component: About,
    name: 'About',
    meta: {
       title: 'About'
  } },
    { path: '/aboutme',
      component: () => import(/* webpackChunkName: "aboutme" */ './components/AboutMe.vue'),
      // component: AboutMe
    }
]