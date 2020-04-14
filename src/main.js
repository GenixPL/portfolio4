import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import DevelopedApps from "@/components/developedApps/DevelopedApps";
import Algorithms from "@/components/algorithms/Algorithms";
import Hackathons from "@/components/hackathons/Hackathons";
import FlutterStuff from "@/components/flutterStuff/FlutterStuff";
import OtherArticles from "@/components/otherArticles/OtherArticles";
import Placelytics from "@/components/developedApps/placelytics/Placelytics";
import Pictile from "@/components/developedApps/pictile/Pictile";
import TheHardestGame from "@/components/developedApps/thg/TheHardestGame";
import Quarantino from "@/components/developedApps/quarantino/Quarantino";
import Website from "@/components/developedApps/website/Website";
import MyWord from "@/components/developedApps/myWord/MyWord";
import Home from "@/components/home/Home";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/resume', component: Resume},
    {path: '/portfolio', component: Portfolio},
    {path: '/contact', component: Contact},
    {path: '/developed-apps', component: DevelopedApps},
    {path: '/developed-apps/placelytics', component: Placelytics},
    {path: '/developed-apps/pictile', component: Pictile},
    {path: '/developed-apps/the-hardest-game', component: TheHardestGame},
    {path: '/developed-apps/quarantino', component: Quarantino},
    {path: '/developed-apps/website', component: Website},
    {path: '/developed-apps/my-word', component: MyWord},
    {path: '/algorithms', component: Algorithms},
    {path: '/hackathons', component: Hackathons},
    {path: '/flutter-stuff', component: FlutterStuff},
    {path: '/other-articles', component: OtherArticles},
];

const router = new Router({
    routes: routes,
    // mode: 'history',
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});

router.beforeEach((to, from, next) => {
    document.title = "Niedziałek Łukasz | Portfolio"
    next()
})

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app');
