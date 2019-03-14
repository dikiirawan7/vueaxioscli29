import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld'
import Iseng from '@/components/Cumaiseng'


Vue.use(VueAxios, axios)
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/iseng',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      name:'Iseng',
      component:Iseng

    }
    
  ]
})
