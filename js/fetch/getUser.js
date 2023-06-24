import { ajax } from "./fetch.js";

export const getUser = ()=>{
    document.querySelector(".btnSearchUser").addEventListener("click", async (e)=>{
        let json = await ajax("datos/users.json");
        let value = await json.filter(v => v.userId == document.querySelector("#InputsearchUser").value)
        if (!value[0]) {
            document.querySelector("#searchUser").innerHTML = ""
            return false
        }
        document.querySelector("#searchUser").innerHTML = `
        <div class="row pt-4 m-auto">
            <div class="col-md-6 col-12 div_img_user p-4 align-items-center justify-content-center d-flex">
                <img class="img_user" src="${value[0].img}">
            </div>
            <div class="col-md-6 col-12 p-4 div_img_content">
                <div class="row">
                    <div class="col-6 p-3">
                        <p>
                            <b class="d-block">Id</b>
                            ${value[0].userId}
                        </p>
                    </div>
                    <div class="col-6 p-3">
                        <p>
                            <b class="d-block">Name</b>
                            ${value[0].userName}
                        </p>
                    </div>

                    <div class="col-6 p-3">
                        <p>
                            <b class="d-block">Emai</b>
                            ${value[0].correo}
                        </p>
                    </div>
                    <div class="col-6 p-3">
                        <p>
                            <b class="d-block">Edad</b>
                            ${value[0].edad}
                        </p>
                    </div>

                    <div class="col-6 p-3">
                        <p>
                            <b class="d-block">Genero</b>
                            ${value[0].genero}
                        </p>
                    </div>
                    <div class="col-6 p-3">
                        <p>
                            <b class="d-block">Pais</b>
                            ${value[0].pais}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
        console.log(value)

    })
}