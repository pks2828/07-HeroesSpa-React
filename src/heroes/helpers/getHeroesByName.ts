import { heroes } from "../data/heroes";


export const getHeroesByName = ( name:string = '' ) => {

    name = name.toLocaleLowerCase().trim(); // Convertimos el nombre a minusculas y eliminamos los espacios en blanco

    if( name.length === 0 ) return [];// Si el nombre esta vacio retornamos un arreglo vacio

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name) // Filtramos los heroes que incluyan el nombre que estamos buscando en el nombre del heroe
    );


}