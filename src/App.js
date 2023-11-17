import './Components/StickyNotes'
import './App.css';
import StickyNotes from './Components/StickyNotes';
import { useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [notes, setNotes] = useState([])

  function createNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ])
  }

  function removeNote(nodeId) {
    setNotes(notes.filter(item => item.id !== nodeId))
  }
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <div className='button'>
          <button type="button" className="btn btn-primary" id='new' onClick={createNote}>
            <i className="bi bi-plus"></i>
          </button>
        </div>
        <div className="addNote">
          "Sticky Notes Hub: Where Ideas Stick and Innovation Flows"
        </div>
      </div>

      {notes.map((item) =>
        <StickyNotes onClose={() => removeNote(item.id)} />
      )}

    </div>
  );
}

export default App;
