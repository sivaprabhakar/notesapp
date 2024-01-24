import React from 'react';
import SideBar from './components/SideBar';
import NotesArea from './components/NotesArea';
import Notes from './components/Notes';


function App() {
  return (
    <div  id="wrapper">
     
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <SideBar />
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
