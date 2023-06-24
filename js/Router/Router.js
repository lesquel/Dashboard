import { Login } from "../component/Login/Login.js"
import { Dashboard } from "../component/dashboard/dashboard.js";
import { Home } from "../component/home/Home.js";
import { Search } from "../component/search/Search.js";
export const router = (url)=>{
    let pag;
    if (url === "") {
        pag = Login()
    } else if(url === "#/"){
        pag = Home()
    } else if (url === "#/dashboard"){
        pag = Dashboard()
    } else if (url === "#/search"){
        pag = Search()
    }
    document.querySelector("#root").innerHTML = pag
}