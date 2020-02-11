

import SignUp from "./modules/SignUp.js";



const routes = [
    { path: '/places' , name: 'SignUp', component: SignUp},
    

]


const router = new VueRouter({
    routes
})

const vm = new Vue({
    data: {

    },

    methods:{

    },

    router
}).$mount("#app")