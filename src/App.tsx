import React, { SyntheticEvent, useState } from 'react';
import Hello from './Hello';
import './App.css';

export interface Props{
  name: string,
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}



const App: React.FC =(props)=> {

  const [currentEnthusiasm, setCurrentEnthusiasm] = useState<number>(0);

  onIncrement = (event: SyntheticEvent)=>{
    console.log(event);
    setCurrentEnthusiasm(-1);
  }
  
  onDecrement = (event: SyntheticEvent)=>{
    console.log(event);
    setCurrentEnthusiasm(+1);
  }
  
  const { name } = props;
  if( currentEnthusiasm <= 0){
    throw new Error(" You could be more enthusiatic");
  }

  return (
    <div className='hello'>
      <div className='greeting'>
      Hello { name + getExclamationMarks(currentEnthusiasm)}
      </div>
      <button onClick={onDecrement}
    </div>
  );
};

export default App;
