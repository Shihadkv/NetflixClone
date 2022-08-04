import React from 'react';
import './App.css';
import { action, ComedyMovies, orginals,Documentaries } from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title='Netflix Orginals' />
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
    <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
