const Header = (props) => { 

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <p>
        <h5>{props.parts.name}</h5>
      </p>
    </div>
  )
}

const Total = (props) => {
 
  return (
    <div>
      <p>exercises for this content: {props.parts.exercises}</p>
    </div>
  )

}



const App = () => { 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts[0]} />
      <Total parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Total parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      <Total parts={course.parts[2]} />
    </div>
  )



}



export default App