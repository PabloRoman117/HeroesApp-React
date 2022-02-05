import React, { useMemo } from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import {useNavigate, useLocation} from 'react-router-dom';
export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search);

const [ formValues, handleInputChange] = useForm({
  searchText: q,
});

const {searchText} = formValues;

const heroesFilter = useMemo(() =>  getHeroesByName(q), [q]);

const handleSearch = (e) => {
      e.preventDefault();
      console.log(searchText);
      navigate(`?q=${searchText}`)
}

  return(
    <>
        <h1>Busquedas</h1>
        <hr />

        <div className='row'>
          <div className='col-5'>
            <h4> Busca a tu heroe </h4>
            <hr />

            <form onSubmit={handleSearch}>
              <input
               type='text' 
               className='form-control'
                placeholder='Buscar un heroe'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}/>
            </form>

          <button 
          type='submit'
          className=' btn btn-outline-primary mt-4 block'
          onClick={handleSearch}
          >Submit</button>
          </div>

          <div className='col-7'>
              <h4> Resultados</h4>
              <hr/>

              {
                (q === '')
                  ? <div className='alert alert-info'>Busca un heroe</div> 
                  : (heroesFilter.length === 0) && <div className='alert alert-danger'>No hay resultados:  {q}</div>
              }

              {
                heroesFilter.map(hero => (
                    <HeroCard
                    key={hero.id}
                    {...hero}
                    />
                ))
              }
          </div>
        </div>
    </>
  ) 
}
