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
                }
            ]
        },
        

    ]
})