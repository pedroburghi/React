import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import shinobu from './assets/shinobu.gif';
import ManageData from '../components/ManageData';
import ListRender from '../components/ListRender';
import ConditionalRender from '../components/ConditionalRender';
import ShowUserName from '../components/ShowUserName';
import CarDetails from '../components/CarDetails';

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")


  return (
    <div className="App">
     
     <h1>Avançando em React</h1>
     {/* Imagens em public */}   
     <div>
      <img src="/risuka.jpeg" alt="Capa de Mangá" />
     </div>

     <div>
     {/* Imagens em asset */}
     <img src={shinobu} alt="Pers de Monogatari" /> 
     </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      {/* desestruturando */}
      <CarDetails brand="VW" km={10000} color="azul" />
    </div>
  );
};

export default App
