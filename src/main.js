import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import Home from "@/components/home/Home";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";


// Vue.config.productionTip = false

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/resume', component: Resume},
    {path: '/portfolio', component: Portfolio},
    {path: '/contact', component: Contact},
];

const router = new Router({
    routes: routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    document.title = "Niedziałek Łukasz | Portfolio"
    next()
})

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app');
