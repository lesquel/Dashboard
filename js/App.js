import { router } from "./Router/Router.js"
import { routerFun } from "./Router/RouterFun.js";

window.addEventListener("DOMContentLoaded", function(){
    router(this.location.hash);
    routerFun(this.location.hash)
    this.window.addEventListener("hashchange", function(){
        router(this.location.hash);
        routerFun(this.location.hash)
    })
})