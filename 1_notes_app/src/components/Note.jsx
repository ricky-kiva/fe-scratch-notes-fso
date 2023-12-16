const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className="note">
      <button onClick={toggleImportance}>{label}</button>
      &nbsp;{note.content}
    </li>
  )
}

export default Note