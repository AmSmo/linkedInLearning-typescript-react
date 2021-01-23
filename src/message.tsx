import React from 'react'

export default function Message(props: {message: string, name: string}): any{
 
    return(
        <p>{props.name} says "{props.message}"</p>
    )
}