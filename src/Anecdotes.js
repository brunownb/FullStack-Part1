import { useState } from 'react'

const points = new Uint8Array(8); 

const App = () => {
    
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)


  const nextAnecdote = () => {
        setSelected(selected+1)
    }

  const button = ({handleClick,text}) => (
    <button onClick={handleClick}> {text} </button>
    )
    
  
  
  const [votes, setVotes] = useState(0)

  const vote = () => {
      points[selected] += 1
      console.log(points)     
      setVotes(points[selected])
      
  }
  
  function GreaterValue(arr) {
    let GV = Math.max.apply(Math, arr);
    return GV
  }

  function IndexGreaterValue(arr) {
    let index_GV = arr.indexOf(Math.max(...arr));
    return index_GV
  }
  
 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {points[selected]} votes
      <br></br>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <br></br>
      <h1>Anecdote with most votes</h1>
      {anecdotes[IndexGreaterValue(points)]}
      <br></br>
      has {GreaterValue(points)} votes      

    </div>
  )
}

export default App