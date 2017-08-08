import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'wrap',
            component: resolve => require(['@/components/Wrap'], resolve),
        },
        {
            path: '/patient',
            name: 'patient',
            component: resolve => require(['@/components/Patient'], resolve),
        }

    ]
})