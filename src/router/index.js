import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'warp',
            component: resolve => require(['@/components/Warp'], resolve),
        },
        {
            path: '/patient',
            name: 'patient',
            component: resolve => require(['@/components/Patient'], resolve),
        }

    ]
})