import { createRouter, createWebHistory } from 'vue-router';
import CountryRanks from '../view/CountryRanks.vue';
import CountryInfo from '../view/CountryInfo.vue';

const routes = [
  { 
    path: '/', 
    component: CountryRanks 
  },
  { 
    path: '/:name',
    name: 'CountryInfo', 
    component: CountryInfo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;