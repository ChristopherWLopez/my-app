import React, { useState } from 'react';

export interface Props{
    name: string,
    enthusiamLevel?: number;
}


 function Hello({ name, enthusiamLevel = 1}: Props) {


    const [ currentEnthusiasm, setCurrentEnthusiasm] = useState(enthusiamLevel);

    const  onIncrement=()=>{
        setCurrentEnthusiasm(currentEnthusiasm +1);
    }

    const  onDecrement=()=>{
        setCurrentEnthusiasm(currentEnthusiasm -1);
    }

    
    if(enthusiamLevel <= 0){
        throw new Error("You could be alittle more enthustatic");
    }

    function getExclamationMarks(numChars: number){
        return Array(numChars +1).join("!");
    }
  return (
    <>
    <div className='hello'>
      <div className='gretting'>
        Hello {name  +  currentEnthusiasm + getExclamationMarks(enthusiamLevel)}
      </div>
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>
    </div>
    </>
  );
}


export default Hello ;

//helpers
