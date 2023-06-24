import { Main } from "../main/Main.js";

export const Home = ()=> `

    ${Main(
        `
        <h2 class="m-2">Users</h2>
        <div class="div_table">
            <table class="table table-dark table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody id="Users">
                    
                </tbody>
            </table>
        <div>
        `
    )}

`