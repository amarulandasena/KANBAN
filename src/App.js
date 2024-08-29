import logo from './logo.svg';
import './App.css';
import Notas from './componentes/Notas.js';

function App() {

  const Agregar = () => {
    console.log("Agregar nota");
  }

  return (
    <div className="App">
      <button onClick = {Agregar}> Agregar </button>
      <Notas />
    </div>
  );
}

export default App;

/* Este componente orquestará la ejecución de nuestra aplicación. Podemos añadir el botón que queramos allí,
podremos gestionar el estado y también podremos añadir notas. */