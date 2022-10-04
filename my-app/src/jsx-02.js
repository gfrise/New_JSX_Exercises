import React from 'react';

const name = 'Jim'

const elementToRender = function greeting(name) {
    return <h1>Hello, {name}</h1>
}

export const element = (
    <>
    {elementToRender(name)}
    </>
) 

