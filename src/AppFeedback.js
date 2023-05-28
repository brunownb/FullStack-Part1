import {useState} from 'react'

const Header = ({content}) => <div><h1>{content}</h1></div>

const button = ({handleClick,text}) => (
    <button onClick={handleClick}> {text} </button>
    )

const Statistics = (props) => {

    const {good,neutral,bad} = props

    if (props.good === 0 && props.neutral === 0 && props.bad === 0 ){
        return(
            <div>
                No feedback given
            </div>
        )
    }
    
    // return(
    //     <div>
    //        <p>good {good}</p>
    //         <p>neutral {neutral}</p>
    //         <p>bad {bad}</p>
    //         <p>all {good+neutral+bad}</p>
    //         <p>average {(good-bad)/(good+neutral+bad)}</p>
    //         <p>positive {good/(good+neutral+bad)*100} %</p>
    //     </div>  
    // )

    const StatisticLine = (props) =>{
        return(
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        )
    }

    return(
        <div>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={good+neutral+bad} />
          <StatisticLine text="average" value ={(good-bad)/(good+neutral+bad)} />
          <StatisticLine text="positive" value ={good/(good+neutral+bad)*100 + ' %'} />
        </div>
      )
    
    }


const App = () => {
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    

    const increaseGood = () => {
          console.log('increasing value before', good)
          setGood(good +1)
        } 

    const increaseNeutral = () => {
          console.log('increasing value before', neutral)
          setNeutral(neutral +1)
        }

    const increaseBad = () => {
            console.log('increasing value before', bad)
            setBad(bad +1)
          }

    

    return (
        <table>
            <tr>
                <Header content = {'give feedback'} />
                <button onClick={increaseGood}>good</button>
                <button onClick={increaseNeutral}>neutral</button>
                <button onClick={increaseBad}>bad</button>
                <Header content = {'statistics'} />
                <Statistics good = {good} neutral = {neutral} bad={bad}/>       
            </tr>
        </table>
    
    )

}

export default App
