import Note from './components/Note'

const  App = ({ notes }) =>
  <div>
    <h1>Notes</h1>
    <ul>
      {notes.map((note, i) => 
        <Note key={i} note={note} />
      )}
    </ul>
  </div>


export default App
