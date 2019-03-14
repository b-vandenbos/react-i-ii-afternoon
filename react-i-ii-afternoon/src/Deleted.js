import React from 'react';

export default function Deleted(props) {

    return (
            <div>
            <p>
                <span>{props.name.first} {props.name.last} | </span>
                {props.title} - {props.employer}
                <button className="restore-button">Restore</button>
             </p>   
        </div>
    )

}