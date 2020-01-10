import React from 'react';
import ReactDOM from 'react-dom';
import Card, {Footer} from './components/Card';
import './App.css';


function App() {
  return(
    <div className='App'>
      <Footer footer="Footer"/><br/>
      < Card card1="Card-1" card2="Card-2" card3="Card-3"/>
    </div>
  );
}


export default App;
ReactDOM.render(< App />, document.getElementById("root"));
