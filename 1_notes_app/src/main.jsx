import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes}/>
  )
})