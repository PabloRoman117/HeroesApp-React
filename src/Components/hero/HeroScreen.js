import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroByID } from '../../helpers/getHeroById';

export const HeroScreen = () => {

const {heroeId} = useParams();
const navigate = useNavigate();


const hero = useMemo( () => getHeroByID(heroeId), [heroeId] ) ;



const handleReturn = () => {
  navigate(-1)
}

if(!hero ) {
  return <Navigate to='/' />
}

const {id, superhero, alter_ego, first_appearance, characters, publisher} = hero;

const url = `/assets/img/${id}.jpg`;



  return (

    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={url} 
          alt={superhero}
          className='img-thumbnail animate__animated animate__bounceInLeft'
         />

      </div>

      <div className='col-8 '>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b> {alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b> {publisher}</li>
          <li className='list-group-item'><b>First appearance: </b> {first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
        onClick={handleReturn}
        className=' btn btn-outline-info'> Regresar
        </button>
      </div>
  
    </div>
  )

}
