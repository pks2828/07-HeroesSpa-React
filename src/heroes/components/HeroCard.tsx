import { Link } from "react-router-dom";

export interface HeroCardProps {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}: HeroCardProps) => {

    console.log(publisher);

    const heroImageUrl = `/assets/heroes/${ id }.jpg`

    const charactersByHero = (<p> {characters} </p>);

    return (
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4 ">
              <img src={heroImageUrl} className="card-img" alt={superhero} />
            </div>

            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                {alter_ego !== characters && charactersByHero}

                <p className="card-text">
                  <small className="text-muted"> {first_appearance} </small>
                </p>

                <Link to={`/hero/${id}`}>Más..</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

/* 
    !Primera manera de tener el los nombre !duplicados en el componente HeroCard 
    
    const CharactersByhero = ({ alter_ego, characters }:) => {
        if (alter_ego !== characters) return (<></>);
        return (<p> {characters} </p>);
    }
    
    !Segunda manera de tener los nombres !duplicados en el componente HeroCard
    
    const charactersByHero = (<p> {characters} </p>);
    {alter_ego !== characters && (charactersByHero)}

    !Tercera manera de tener los nombres !duplicados en el componente HeroCard
    
    {( alter_ego !== characters ) && <p className="card-text">{ characters }</p>}


*/