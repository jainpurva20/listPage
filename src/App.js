import React from 'react';
import { Container, Header } from './components/';
import { ListPage } from './pages/';

import './styles/app.css'

function App() {
   return (
      <div className="App" >
         <Header />
         <Container>
            <ListPage />
         </Container>
      </div>
   );
}

export default App;

