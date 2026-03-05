import './App.css'
import EventForm from './components/EventForm';
import Banner from './components/Banner';
import { useState } from 'react';
import EventCards from './components/EventCards';

function App() {
  const temas = [
    {id: 1, nome: "front-end"},
    {id: 2, nome: "back-end"},
    {id: 3, nome: "devops"},
    {id: 4, nome: "inteligência artificial"},
    {id: 5, nome: "data science"},
    {id: 6, nome: "cloud"},
  ];

  const [eventos, setEventos] = useState([
    {capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png", tema: temas[0], data: new Date(), titulo: "Mulheres no Front"}
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
    console.log(eventos);
  }

  return (
    <main>
      <header>
        <img src="../public/logo-tecboard.png" alt="Logo" />
      </header>
      <Banner />
      <EventForm temas={temas} adicionarEvento={adicionarEvento}/>
      <EventCards temas={temas} eventos={eventos} />
    </main>
  )
}

export default App
