import logo from './logo.svg';
import './App.css';

function App() {

  function soma(a, b){
    return a + b 
  }


  return (
  <div className="App">
    <h1>Teste</h1>
    <p>Esse é a minha primeira alteração no app</p>
    <p>Soma: {soma(1,2)}</p> 
  </div>
  );
}

export default App;
