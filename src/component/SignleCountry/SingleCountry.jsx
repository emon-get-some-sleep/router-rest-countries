import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleCountry = () => {
    const navigate = useNavigate();
    const country = useLoaderData();
    const getBack = () => {
        navigate(-1);
    }
    const {name, capital, flags} = country[0];
    return (
        <div>
            <img src={flags.png} alt="" />
            <h3>Here is the details</h3>
            <h4>Country name: {name.common}</h4>
            <p>{name.common}'s capital is {capital}</p>
            <button onClick={getBack}>Go back</button>
        </div>
    );
};

export default SingleCountry;