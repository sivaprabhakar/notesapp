import React, { useContext } from 'react';
import { NotesTaken } from '../context/NotesContext';

function Notes() {
  const { data } = useContext(NotesTaken);

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h4 className="mb-0 text-gray-800">My Notes</h4>
        <h6 className="mb-0 text-gray-800">Recently viewed</h6>
        <div className="row each-note">
          {Array.isArray(data) && data.map((e, i) => (
            <div key={i} className="col-xl-3 col-md-6 mb-4 rec-view-card">
              <div className="card shadow h-100 py-1">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-uppercase mb-1 d-flex justify-content-between">
                        <h6>{e.title}</h6>
                        <div>
                          <img className="mx-1" src="./src/assets/edit.svg" alt="edit" />
                          <img className="mx-1" src="./src/assets/delete.svg" alt="delete" />
                        </div>
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{e.note}</div>
                      <div className="my-3">{e.updatedBefore}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
