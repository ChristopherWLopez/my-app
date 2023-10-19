import React from 'react'

exprt interface Props{
    name: string,
    enthusiamLevel?: number;
}

 function Hello({ name, enthusiamLevel = 1}: Props) {
    if(enthusiamLevel <= 0){
        throw new Error("You could be alittle more enthustatic ");
    }
  return (
    <div className='hello'>
      <div className='gretting'>
        Hello {name + getExclamationMarks(enthusiamLevel)}
      </div>
    </div>
  );
}

export default Hello ;

//helpers

function getExclamationMarks(numChars: number){
    return Array(numChars +1).join("!");
}