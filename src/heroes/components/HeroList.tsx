import { useMemo } from "react";
import { HeroCard } from ".";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }: { publisher: string }) => {

    // se utiliza useMemo para evitar que se vuelva a renderizar el componente si no cambia el publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); 


    // esto devuelve un array de heroes que coinciden con el publisher que se le pasa como argumento a la funcion getHeroesByPublisher
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => ( // se mapea el array de heroes y se devuelve un li por cada heroe que se encuentra en el array de heroes
                    <HeroCard key={hero.id}
                        {...hero}
                    /> // se le asigna una key unica a cada li que se renderiza en el array de heroes que se mapea 
                ))
            }
        </div>
    )

}

/* 
    para crear este componente, necesitas definir el componente, obtener los datos, 
    renderizar los datos, asignar una clave única a cada elemento de la lista
    mostrar los datos y luego cerrar la definición del componente.

*/