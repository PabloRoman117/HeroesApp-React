import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../helpers/getHeoresByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    
    const heroes = useMemo (() => getHeroesByPublisher(publisher), [publisher] );
  return(
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInLeft mt-4'>

            {
                heroes.map(hero => (
                    <HeroCard
                     key={hero.id}
                     {...hero}
                    />
                ) )
            }
       
    </div>
  ) 
}
