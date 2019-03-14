import React from 'react';

export default function DataProcess(props) {

    let movies=props.movies.map(movie => {
        return <li key={movie}>{movie}</li>;
    })

    return (
     <div>   
        <div className='data-field'>
            <div className='data-title'>
                <h1>{props.name.first} {props.name.last}</h1>
                <h2>{props.index + 1}/{props.arr.length}</h2>
            </div>
            <div className='data-info'>
                <p><span>From:</span> {props.city}, {props.country}</p>
                <p><span>Job Title:</span> {props.title}</p>
                <p><span>Employer:</span> {props.employer}</p>
            </div>    
            <div className='data-info'>
                <p><span>Favorite Movies:</span></p>
                <ol>
                    {movies}
                </ol>
            </div>
        </div>
     </div>   
    )

}