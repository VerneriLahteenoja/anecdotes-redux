import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return (
      state.anecdotes.filter(anecdote =>
        anecdote.content.includes(state.filter)
      )
    )
  }
  )
  const dispatch = useDispatch()

  const handleLike = (id) => {
    dispatch(setNotification('Liked'))
    dispatch(addVote(id))
  }

  return (
    <div>
      {anecdotes.sort(((prev, curr) => curr.votes - prev.votes)).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleLike(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>  
  )
}

export default AnecdoteList