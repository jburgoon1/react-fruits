import React from 'react'
import foods from './foods'
let randomChoice=Math.floor(Math.random()*foods.length)
const Choice = ({message1, message2}) =>{
    
    if(message1 && message2){
    return console.log(message1, foods[randomChoice]), console.log(message2, foods[randomChoice])
    }else if(message2){
        return console.log(message2)
    }else{
        return console.log(message1, foods[randomChoice])
    }
}

const Remove = ({message}) =>{
    foods.splice(randomChoice,1)
    return console.log(message, foods.length)
}

export {Choice, Remove}