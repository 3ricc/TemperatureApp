import React from 'react';

const City = ({ city }) =>{
    if (!city) return null;

    return(
        <div>
            <h3>{city}</h3>
        </div>
    )
} // testing shit

export default City;