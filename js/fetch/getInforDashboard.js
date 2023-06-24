import { ajax } from "./fetch.js";

const Color = (value)=>{
    
    let c =  [...value.map(()=> `rgba(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, .4)`)]
    return c
}


export const getEdades = async()=>{
    Chart.defaults.borderColor = '#fff';
    Chart.defaults.color = '#fff';

    let json = await ajax("datos/users.json");
    // recopilo cuantas edades hay ejm si hay [1, 3, 1, 2]  deja [1, 3, 2]
    let edades = [...new Set(json.map(value => value.edad))]
    // el numero de esas edades
    let cantidad = edades.map(value => json.filter(edad => edad.edad === value).length)


    const canvaEdades = document.querySelector("#UsersEdades")
    new Chart(
        canvaEdades, {
        type: 'doughnut',
        data: {
            labels: edades,
            datasets: [{
                backgroundColor : Color(edades),
                data: cantidad,
            }]
        }});
    console.log({edades, cantidad})
}


export const getPaises = async()=>{
    let json = await ajax("datos/users.json");
    let paises = [...new Set(json.map(value => value.pais))]
    let cantidad = paises.map(value => json.filter(pais  => pais.pais === value).length)
    console.log({json,paises, cantidad})

    const canvaPaises = document.querySelector("#UserPaises")

    new Chart(
        canvaPaises,{
        type: 'line',
        data: {
            labels: paises,
            datasets: [{
                label: "Paises de Usuario",
                backgroundColor : Color(paises),
                data: cantidad,
            }]
        }
        }
    )
}


export const getGeneros = async()=>{
    let json = await ajax("datos/users.json");
    let generos = [...new Set(json.map(value => value.genero))]
    let cantidad = generos.map(value => json.filter(genero => genero.genero === value).length)
    let canvaGenero = document.querySelector("#UserGenero");

    console.log({generos, cantidad})
    new Chart(
        canvaGenero, {
        type: 'bar',
        data: {
            labels: generos,
            datasets: [{
                label: "Generos de Usuario",
                data: cantidad,
                backgroundColor: Color(generos)
            }]
        },
        options: {
          parsing: {
            xAxisKey: 'id',
            yAxisKey: 'nested.value'
          }
        }
      })
      
}




