import Router from 'vue-router';

import index from '../components/pages/index'

const routes = [{
  path: '/',
  component: index
}, {
  path: '/*',
  component: index
}]

export default new Router({
  routes,
})