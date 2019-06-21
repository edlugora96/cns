
export default {
  home:{
    path: '/',
    component: 'dollar sign icon',
    title: 'Inicio',
    exact: true,
  },
  properties:{
    path: '/properties',
    component: 'dollar sign icon',
    title: 'Propiedades',
  },
  search:{
    path: '(/properties|/agents)',
    component: 'dollar sign icon',
    title: 'Buscar',
  },
  agents:{
    path: '/agents',
    component: 'dollar sign icon',
    title: 'Agentes',
  },
  faq:{
    path: '/faq',
    component: 'dollar sign icon',
    title: 'FAQ',
  },
  contact:{
    path: '/contact',
    component: 'dollar sign icon',
    title: 'Contactanos',
  },
  login:{
    path: '/login',
    component: 'dollar sign icon',
    title: 'Login',
  },
  regist:{
    path: '/login',
    component: 'dollar sign icon',
    title: 'Registrarse',
  },
  viewProperties:{
    path: '/properties/:id',
    component: 'dollar sign icon',
    title: 'Registrarse',
    list: false,
  },
  viewAgents:{
    path: '/agents/:id',
    component: 'dollar sign icon',
    title: 'Registrarse',
    list: false,
  }
};