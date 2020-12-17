import React from 'react'

export default function User(props){
    const { details } = props;

    if(!details){
        return <h3>working on fetching the user's details</h3>
    }

    return ( 
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Accepted Terms: {details.terms = true ? 'yes' : 'no'}</p>
        </div>
    )
}