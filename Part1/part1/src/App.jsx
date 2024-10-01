import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

  const course = 'Half Stack application development'

  const parts = [
    {name:"Fundamentals of React", exercises: 10},
    {name:"Using props to pass data", exercises: 7},
    {name:"State of a component", exercises: 14},
  ]

  //Calcular el numero total de ejercicios
  const totalexercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      <div>
        <Header course={course}/>
        <Content parts={parts} />
        <Total totalexercises={totalexercises}/>
      </div>
    </>
  )
}

export default App