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

  return (
    <div className='App'>
      <Hello name="Elvis"
        enthusiamLevel={2}/>
    </div>
  );
};


export default App;
