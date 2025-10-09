import './App.css'
import NoteComponent from './component/notes/NoteComponent';
import TimerComponent from './component/TimerComponent';

function App() {
  let user = "Sadeq";

  return (
    <div>
      <h1>Welcome to Notes</h1>
      <p>Hello, {user} </p>
      {/* <NoteComponent/> */}
      <TimerComponent />
      <TimerComponent />
    </div>
  )
}

export default App
