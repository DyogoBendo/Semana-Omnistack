import React
//{useState} 
from 'react';

import './global.css';

import Routes from './routes';

function App() {
  /**const [contador, setCounter] = useState(0); // Retorna um array com duas posicoes

  //Array [valor, funcao de atualizacao]

  function increment(){
    setCounter(contador + 1);
  }
  <div>
      < Header> Contador: {contador}</Header>
      <button onClick={increment}>Incrementar</button>
    </div> */

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
