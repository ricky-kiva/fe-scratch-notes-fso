const Note = ({ note }) =>
  <li>{note.content}</li>

const  App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, i) => 
          <Note key={i} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
