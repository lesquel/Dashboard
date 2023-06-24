import { getEdades, getPaises, getGeneros } from "../fetch/getInforDashboard.js"
import { getUser } from "../fetch/getUser.js"
import { getUsers } from "../fetch/getUsers.js"

export const routerFun = (url)=>{
    if (url === "") {
        return false
    } else if(url === "#/"){
        getUsers()
    } else if (url === "#/dashboard"){
        getEdades()
        getPaises()
        getGeneros()
    } else if (url === "#/search"){
        getUser()
    }
}