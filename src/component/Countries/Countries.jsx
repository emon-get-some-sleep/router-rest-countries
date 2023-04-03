import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3>All Countries {countries.length}</h3>
            <ol type="1">
                {
                    countries.map(country => <li>{country.name.common} <Link to={`/country/${country.cca3}`}>Details</Link></li>)
                }
            </ol>
        </div>
    );
};

export default Countries;