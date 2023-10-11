import React from 'react';
import Sidebar from './components/Sidebar';
import NotesArea from './components/NotesArea';
import Notes from './components/Notes';
import NotesContext from './context/NotesContext';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        
            <NotesArea />
          
          <div className="container-fluid">
            
              <Notes />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
