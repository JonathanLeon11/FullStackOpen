import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'
import History from './History'
import Buttons from './Buttons'
import Statistics from './Statistics'

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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); //Inicializado en 0
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Funcion para seleccionar una anecdota
  const randomAnecdota = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  //Funcion para votar por la anecdota
  const voteAnecdote = () => {
    const updateVotes = [...votes];
    updateVotes[selected] += 1;
    setVotes(updateVotes);
  }

  //Funcion para encontrar la anecdotas mas votada
  const mostVotedA = () => {
    return votes.indexOf(Math.max(...votes));
  }

  const mostVoted = mostVotedA();

  // Funciones para los botones de ejercicio unicafe
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const course = {
    name:'Half Stack application development',

    parts: [
      {name:"Fundamentals of React", exercises: 10},
      {name:"Using props to pass data", exercises: 7},
      {name:"State of a component", exercises: 14},
    ],
  }
  
  //Calcular el numero total de ejercicios
  const totalexercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <>
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        <Total totalexercises={totalexercises}/>
        <Buttons
          ClickGood={handleGoodClick}
          ClickNeutral={handleNeutralClick}
          ClickBad={handleBadClick}
        />
        <Statistics good={good} neutral={neutral} bad={bad}/>
        <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]}</p>
        <p>This anecdote has {votes[selected]} votes.</p>
        <button onClick={voteAnecdote}>Vote</button>
        <button onClick={randomAnecdota}>Next Anecdote</button>
        <h2>Most Voted Anecdote</h2>
            {votes[mostVoted] > 0 ? (
                <div>
                    <p>{anecdotes[mostVoted]}</p>
                    <p>{votes[mostVoted]} votes.</p>
                </div>
            ) : (
                <p>No votes yet.</p>
            )}
      </div>
    </>
  )
}

export default App