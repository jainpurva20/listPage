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
           {/*  <TimeLine>
               <TimeLineComponent title="John Doe sent a SMS"
                  createdAt="2016-09-12 10:06 PM"
                  icon={<i className="material-icons md-18">textsms</i>}>
                  I received the payment for $543. Should be shipping the item within a couple of hours.
               </TimeLineComponent>
               <TimeLineComponent title="John Doe sent a SMS"
                  createdAt="2016-09-15 10:06 PM"
                  icon={<i className="material-icons md-18">textsms</i>} >
                  said that you would share the shipment details? This is an urgent order and so I
                  am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                  gentle reminder if you are on track already!
               </TimeLineComponent>

            </TimeLine> */}
         </Container>
      </div>
   );
}

export default App;

