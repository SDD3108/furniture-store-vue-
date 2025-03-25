import { createRouter,createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
// import User from "./views/User.vue";
import Card from "./views/Card.vue";
import Catalog from "./views/Catalog.vue";
import Busket from "./views/Busket.vue";
import Buying from "./views/Buying.vue";
// import Registration from "./views/Registration.vue";
// import Login from "./views/Login.vue";
import Account from "./views/Account.vue";

const routes=[
    { path:'/',component:Home},
    // { path:'/user/:id',component:User,props:true},
    { path: '/card/:id',component:Card,props:true},
    { path:'/catalog',component:Catalog,props:true},
    { path:'/busket',component:Busket,props:true},
    { path:'/busket/buying/:id',component:Buying,props:true},
    // { path:'/registration',component:Registration,props:true},
    // { path:'/login',component:Login,props:true },
    { path:'/account',component:Account,props:true },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router