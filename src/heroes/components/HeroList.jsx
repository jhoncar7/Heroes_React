import { useMemo } from "react";
import { getHeroesByPublisher } from "../"
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    const herores = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                herores.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
