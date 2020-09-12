
import './index.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0));
    const [selected, setSelected] = useState(0);
    const [max, setMax] = useState(0);
    const handleNextAnecdote = () => {
        
        setSelected(Math.floor(Math.random() * props.anecdotes.length));
    }
    const handleVote = () => {

        let copy = [...points];
        copy[selected]++;
        if(copy[selected] > copy[max]){
            setMax(selected);
        }
        setPoints(copy);
    }
    return (
        <div>
            <Anecdote header = 'Anecdote of the day' anecdote = {anecdotes[selected]} votes = {points[selected]}/>
            <Button handleClick = {() => handleVote()} text = 'vote'/>
            <Button handleClick = {() => handleNextAnecdote()} text = 'next anecdote'/>
            <Anecdote header = 'Anecdote with most votes' anecdote = {anecdotes[max]} votes = {points[max]}/>
        </div>
    )
}
const Anecdote = ({header, anecdote, votes})=> {
    return(
        <>
            <h1>{header}</h1>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    )
}

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)