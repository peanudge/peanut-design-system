import React from 'react'

const Button = ({big = false, name = ""}) => {
    if (big) {
        return <h1 >{name}</h1>
        
    }
    return <p>{name}</p>

}
export default Button