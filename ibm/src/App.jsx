import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [butprev,setvutprev] =useState("<")
  const [butnext,setvutnext] =useState(">")

const images=[
  {id:1,name:"rock",img:"https://picsum.photos/id/1/200"},
  {id:2,name:"rani",img:"https://picsum.photos/id/2/200"},
  {id:3,name:"max",img:"https://picsum.photos/id/3/200"},
  ,{id:4,name:"rob",img:"https://picsum.photos/id/4/200"}
]

 function prev(){
  if(count>1){
  setCount((count)=>count-1)
  }
}

function next(){
  if(count<images.length){
  setCount((count)=>count+1)
  }
}



const res= images.filter(item=>item.id===count)




  return (
    <>
    <h1>Image Carasouel</h1>
      <div className='main'>
      <button className='prev' onClick={prev} disabled={count==1}>{butprev} </button>
      <div className='images'>
        {res.map((item,count)=>(
          // <h1 key={item.id} >{item.img}</h1>
          <img src={item.img} alt={item.name}/>
        ))}
      </div>
       
       <button className='next' onClick={next} disabled={count==images.length-1}>{butnext}</button>
      </div>
    
    </>
  )
}

export default App
