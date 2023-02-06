import { useState } from 'react';
import './App.css';

 function MyButton({count ,onClick}) {
  return(
<button onClick={onClick}> Clicked {count} times</button>
  );

}




 export default function MyApp() {
  const [count,setcount] =useState(0);
  function handleClick() { 
    setcount(count+1);
  }
  return(
    
<>
  <MyButton count={count} onClick={handleClick} />
  <MyButton count={count} onClick={handleClick}/>

</>



  );
 }


        
      
  
