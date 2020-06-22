import React, {useState} from 'react';
import './Room.css'
function Room()
{

const state = useState(true);
console.log("State = " , state);
let [isLit,setLit]= useState(false);
let [age,setAge] = useState(24);
let [Gender,setGender] = useState("Male");

return(
<div>
    this Room is {isLit? "lit": "dark"}
    <br/>
    Age : {age}
    <br/>
    <button onClick={()=> setLit(!isLit)}>Toggle Light</button>
    <br/>
    <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
                            Increase Age
    </button>

    <br/>
    Gender = {Gender}
    <button onClick={()=> 
       { setGender(Gender? "FeMale": "Male");
        console.log(Gender); 
      }
        }>Switch Gender</button>
</div>

)

}

export default Room;