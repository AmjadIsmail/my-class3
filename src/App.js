import React, { useState, useReducer } from 'react';
import './App.css';
import Hello from './Hello';
import Room from './Room';
import Parent from './Parent';
import ValueContext from './ValueContext'

function App({name, age}) {
       let value=useState(48);
        return( 
        <ValueContext.Provider value={value}>      
   <div>
          Hello from App.js updated {name} Age = {age - 5}
          <br/>
          <Hello firstName={name} ></Hello>

   <br/>
   <Room></Room>

   <br/>
   Parent and child section with context value and useReducer
   <Parent></Parent>
          
        </div>
        </ValueContext.Provider>
        )
}
export default App;
