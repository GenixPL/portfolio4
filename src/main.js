import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import Home from "@/components/home/Home";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import DevelopedApps from "@/components/developedApps/DevelopedApps";
import Algorithms from "@/components/algorithms/Algorithms";
import Hackathons from "@/components/hackathons/Hackathons";
import FlutterStuff from "@/components/flutterStuff/FlutterStuff";
import OtherArticles from "@/components/otherArticles/OtherArticles";


// Vue.config.productionTip = false

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/resume', component: Resume},
    {path: '/portfolio', component: Portfolio},
    {path: '/contact', component: Contact},
    {path: '/developed-apps', component: DevelopedApps},
    {path: '/algorithms', component: Algorithms},
    {path: '/hackathons', component: Hackathons},
    {path: '/flutter-stuff', component: FlutterStuff},
    {path: '/other-articles', component: OtherArticles},
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
