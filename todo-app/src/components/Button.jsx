import React from 'react';

const Button=({text,color,borderRadius,type})=>
{
    return(
       <button type = {type}>{text}</button>
    );
}

export default Button;