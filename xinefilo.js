// Objetos //

function Pelicula(nombre, genero, año, director){
    this.nombre = nombre
    this.genero = genero
    this.año = año
    this.director = director
}
const peli1 = new Pelicula ("The Batman","Accion", "2022", "Matt Reeves")
const peli2 = new Pelicula ("Uncharted","Accion", "2022", "Ruben Fleischer")
const peli3 = new Pelicula ("Cloverfield","Ciencia Ficcion", "2008", "Matt Reeves")
const peli4 = new Pelicula ("E.T el extraterrestre","Ciencia Ficcion", "1982", "Steven Spielberg")
const peli5 = new Pelicula ("Indiana Jones y los cazadores del arca perdida","Aventura", "1981", "Steven Spielberg")
const peli6= new Pelicula ("Zombieland","Comedia", "2010", "Ruben Fleischer")
const peli7= new Pelicula ("La Brujula Dorada","Aventura", "2007", "Chris Weitz")
const peli8= new Pelicula ("Operation Finale","Drama", "2018", "Chris Weitz")
const peli9= new Pelicula ("La la land","Musical", "2016", "Damien Chazelle")
const peli10= new Pelicula ("West side story","Musical", "2021", "Steven Spielberg")

const todasLasPeliculas = [peli1,peli2,peli3,peli4,peli5,peli6,peli7,peli8,peli9,peli10]
console.log(todasLasPeliculas)

// FUNCIONES DEL CATALOGO //

// esta función me devuelve un array con los nombres de todas las peliculas //
let nombresPeliculas = mostrarTodasLasPeliculas()
function mostrarTodasLasPeliculas() {
    return todasLasPeliculas.map((todasLasPeliculas) => { return "\n" + todasLasPeliculas.nombre })
}

// Esta función me devuelve la pelicula especifica que busca el usuario filtrado por nombre //
function filtrarPorNombre(catalogo){
    let filtroUsuario = prompt("Peliculas encontradas: \n" + catalogo + "\n\nEscriba el nombre de la pelicula que busca")
    const filtroNombre = todasLasPeliculas.filter ((todasLasPeliculas)=>{return todasLasPeliculas.nombre==filtroUsuario})

    if(filtroNombre.length>0){
        filtroNombre.forEach((filtroNombre)=>alert("Cargando pelicula " + filtroNombre.nombre))}
    else{alert("No se encontro ninguna pelicula con ese nombre")}
    }

// funcion de busqueda por genero //
let catalogoGenero 
function filtrarPorGenero() {
    let filtroGenero = prompt("Seleccione el genero deseado: \nAccion \nCiencia Ficcion \nAventura \nDrama \nComedia \nMusical")

    const peliculasPorGenero = todasLasPeliculas.filter((todasLasPeliculas) => { return todasLasPeliculas.genero == filtroGenero })

    const nombresPorGenero = peliculasPorGenero.map((peliculasPorGenero) => { return "\n" + peliculasPorGenero.nombre }
    )
    if(nombresPorGenero.length>0){
        catalogoGenero = nombresPorGenero
    }
    else{alert("No se encontro el genero que busca. Intentelo nuevamente.")}
    return catalogoGenero
}

//MENU SIMULADOR// 

function menuDeInicio() {
    let menuPrincipal
    do{
	menuPrincipal = parseInt(prompt("¡Bienvenido a XineFilo! \nPara ver el catalogo de peliculas seleccione (1) \nPara salir seleccione (2)"))
    switch (menuPrincipal) {
        case 1:
            menuDeCatalogo()
            break
        case 2:
            alert("Hasta luego!")
            break
        default:
            alert("Por favor, ingresar un valor válido")
        }
    }
    while(menuPrincipal !=2)
}

function menuDeCatalogo() {
    let menuCatalogo = parseInt(prompt("Desea filtrar por: \n1_Nombre \n2_Genero \n3_Volver"))
    switch (menuCatalogo) {
        case 1:
            mostrarTodasLasPeliculas()
            filtrarPorNombre(nombresPeliculas)
            break
        case 2:
            filtrarPorGenero()
            if(catalogoGenero.length>0){filtrarPorNombre(catalogoGenero)}
            break
        case 3:
            menuDeInicio()
            break
        default:
            alert("Por favor, ingresar un valor válido")
            menuDeCatalogo()
    }
}
menuDeInicio()
