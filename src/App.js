import React from 'react';
import './App.css';
import Hello from './Hello';
import Room from './Room';

function App({name, age}) {
  return <div>
          Hello from App.js updated {name} Age = {age - 5}
          <br/>
          <Hello firstName={name} ></Hello>

   <br/>
   <Room></Room>
          
        </div>
}

export default App;
