import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>I am coming form Countries</h1>
            {
                countries.map(country => <Country
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                ></Country>)
            }
             {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;