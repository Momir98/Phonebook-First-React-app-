
import React, {useRef, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

const [show, setShow] = useState(true)
const [name, setName] = useState(null)
const [phone, setPhone] = useState(null)
const [print, setPrint] = useState(false)

const [isHovering, setIsHovering] = useState(false);
const handleMouseOver = () => {
  setIsHovering(true);
};
const handleMouseOut = () => {
  setIsHovering(false);
};



function getName(val){
    setName(val.target.value)
    setPrint(false)
}
function getPhone(val) {
  setPhone(val.target.value)
  setPrint(false)
}
function removeMe(){
  document.getElementById('data').remove()
}


 
  return (
    <div className="App">
     
      <Header></Header>
    
      <div id="app-body">

<div id="all-con" className="all-con" >

<div id='data' className='data'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
{
print
?
(
<><h3>First and last name: {name}</h3> <h4>Phone number: {phone}</h4></>
) : null
}
{isHovering && (<button id='dltbtn' onClick={removeMe}></button>)}
</div>





    

{show && <input id='name' placeholder='Enter first and last name' onChange={getName}></input>}
    {show && <input id='number' placeholder='Enter phone number' onChange={getPhone}></input>}
    {show && <button id='add-btn' onClick={()=> setPrint(true)}></button>}

 <button id='btn' className='btn' onClick={()=> setShow(!show)}>{show === true? 'Colse' : 'Add'} </button>

</div>
   
</div>
     
    </div>
  );
}





export default App;
