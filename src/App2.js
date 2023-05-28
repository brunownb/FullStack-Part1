import {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) =>(
<button onClick={handleClick}> {text} </button>
)

const History = (props) => {
  if (props.allClicks.length === 0){
    return ( 
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


// const App = () => {
//     // const [counter, setCounter] = useState(0)

//     // setTimeout(
//     //     () => setCounter(counter +1),
//     //     1000        
//     // )

//     // console.log('rendering...', counter)

//     // return (
//     //     <div>{counter}</div>
//     // )


// // const [counter, setCounter] = useState(0)
// // console.log('rendering with counter value',counter)

// // const increaseByOne = () => {
// //   console.log('increasing value before', counter)
// //   setCounter(counter +1)
// // } 

// // const decreaseByOne = () => { 
// //   console.log('decreasing, value before', counter)    
// //   setCounter(counter - 1)
// // }

// // const setToZero = () => {
// //   console.log('resetting to zero, value before', counter)    
// //   setCounter(0)
// // }
// // return (
// //   <div>
// //     <Display counter={counter}/>
// //     <button onClick={increaseByOne}>
// //       plus
// //     </button>
// //     <button onClick={setToZero}>
// //       zero
// //     </button>
// //     <Button 
// //       onClick={decreaseByOne}
// //       text='minus'
// //     />

    
// //   </div>
// // )

// const [left, setLeft] = useState(0)
// const [right, setRight] = useState(0)
// const [allClicks, setAll] = useState([])
// const [total,setTotal] = useState(0)

// const handleLeftClick = () => {    
//   setAll(allClicks.concat('L')) 
//   const updatedLeft = left+1
//   setLeft(updatedLeft)
//   setTotal(updatedLeft+right)  }

// const handleRightClick = () => {    
//   setAll(allClicks.concat('R'))  
//   const updatedRight=  right+1  
//   setRight(updatedRight )
//   setTotal(left+updatedRight)  }

// return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks = {allClicks}/>
//       <p>total {total}</p>    </div>
//   )

// }


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => { 
    console.log('hello',newValue)
    setValue(newValue)}   
   
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value+1)}>increment</button>
    </div>
  )
}

export default App