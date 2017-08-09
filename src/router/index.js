import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    routes: [{
            path: '/',
            name: 'wrap',
            component: resolve => require(['@/components/Wrap'], resolve),
            children:[
                {
                    path: '/patient',
                    name: 'patient',
                    component: resolve => require(['@/components/Patient'], resolve),
                },
                {
                    path: '/work',
                    name: 'work',
                    component: resolve => require(['@/components/Patient'], resolve),
                },
                {
                    path: '/appoint',
                    name: 'appoint',
                    component: resolve => require(['@/components/Patient'], resolve),
                },
                {
                    path: '/visit',
                    name: 'visit',
                    component: resolve => require(['@/components/Patient'], resolve),
                },
                {
                    path: '/tooth',
                    name: 'tooth',
                    component: resolve => require(['@/components/Patient'], resolve),
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: resolve => require(['@/components/Patient'], resolve),
                }
            ]
        },
        

    ]
})