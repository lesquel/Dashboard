import { Main } from "../main/Main.js";

export const Search = ()=> `

${Main(

    `
    <form>
    <div class="mb-3">
        <label  for="InputsearchUser" class="form-label">User</label>
        <input style="border-bottom: 2px solid" type="email" class="form-control w-75 m-auto" 
        id="InputsearchUser" placeholder="User">
        <button type="button" class="btnSearchUser btn btn-dark mt-4">Search</button>
    </div>
    </form>
    <div class="row" id="searchUser">


    </div>
    `

)}

`