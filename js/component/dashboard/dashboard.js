import { Main } from "./../main/Main.js"

export const Dashboard = ()=> `
    ${Main(
        ` 
        <div class="row justify-content-evenly pt-4">
            <div class="div_canva col-md-5 col-12 m-3 p-4 ">
                <h3 class="text-center can_text">Edades</h3>
                <canvas id="UsersEdades"></canvas>
            </div>
            <div class="div_canva col-md-5 col-12 m-3 p-4">
                <h3 class="text-center can_text">Paises</h3>
                <canvas id="UserPaises"></canvas>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="div_canva col-md-8 col-12 m-3 p-4 ">
                <h3 class="text-center can_text">Genero</h3>
                <canvas id="UserGenero"></canvas>
            </div>
        </div>

        `
    )}
`