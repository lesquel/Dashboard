import { ajax } from "./fetch.js";

export const getUsers = async()=>{
    let json = await ajax("datos/users.json");
    json.forEach(value => {
        document.querySelector("#Users").innerHTML += `
        <tr>
            <th scope="row">${value.userId}</th>
            <td>${value.userName}</td>
            <td>${value.correo}</td>
            <td class="updateUser" data-userId="${value.userId}">
                <img class="icon_table_d_u" src="img/update.svg" alt="">
            </td>
            <td class="deleteUser" data-userId="${value.userId}">
                <img class="icon_table_d_u" src="img/delete.svg" alt="">
            </td>
        </tr>
        `
    });
    console.log(json)
    
}