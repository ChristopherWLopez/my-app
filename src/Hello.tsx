import React, { SyntheticEvent, useState, useReducer } from 'react';

export interface Props{
    name: string,
    enthusiamLevel?: number;
}

function updateEnthusiam(state: number, action:{ type: string }){
    switch(action.type){
     case 'increment':
         return state + 1;
     case 'decrement':
         return state - 1;
         default:
             return state;
    }
 };

 function Hello({ name, enthusiamLevel = 1}: Props) {


    const [ currentEnthusiasm, dispatch] = useReducer(updateEnthusiam, enthusiamLevel);

    
    if(enthusiamLevel <= 0){
        throw new Error("You could be alittle more enthustatic");
    }

    function getExclamationMarks(numChars: number){
        return Array(numChars +1).join("!");
    }



  return (
    <div className='hello'>
      <div className='gretting'>
        Hello {name  +  currentEnthusiasm + getExclamationMarks(enthusiamLevel)}
      </div>
      <button onClick={()=> dispatch({ type: 'increment'})}> + </button>
      <button onClick={()=> dispatch({ type: 'decrement'})}> - </button>
    </div>
  );
}


export default Hello ;

