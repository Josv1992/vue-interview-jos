import { createRouter, createWebHistory } from 'vue-router';

import ToDoList from './components/ToDoList.vue';
import Contact from './components/Contact.vue';
import Legal from './components/Legal.vue';
import About from './components/About.vue';
import AboutMe from './components/AboutMe';


const routes = [
  { path: '/', redirect: '/ToDoList' },
  { 
    path: '/todo', 
    component: ToDoList,
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
  { path: '/contact', component: Contact, name: 'Contact', meta: {
    title: 'Contact'
  } },
  { path: '/legal', component: Legal, name: 'Legal', meta: {
    title: 'Legal Info'
  } },
  { path: '/about', component: About, name: 'About', meta: {
    title: 'About'
  }, children: [
    {
      path: '/aboutme',
      component: AboutMe
    }
  ] }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
