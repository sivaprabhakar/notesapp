import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { NotesTaken } from '../context/NotesContext';
import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';

function NotesArea() {
  const { data, setData } = useContext(NotesTaken);

  return (
    <div className="bg-light mt-5 mb-5 static-top py-5 px-3" style={{ minHeight: "fit-content" }}>
      <div className="row">
        <Formik
          initialValues={{
            title: '',
            note: ''
          }}
          onSubmit={(values, { resetForm }) => {
            if (values.title.trim() !== '' && values.note.trim() !== '') {
              setData([...data, values]);
              resetForm();
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form className="mr-auto ml-md-0 md-100 navbar-search" onSubmit={handleSubmit}>
              <h2>Add a Note</h2>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="exampleFormControlInput1"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea
                  className="form-control"
                  name="note"
                  id="exampleFormControlTextarea1"
                  value={values.note}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="3"
                  placeholder="Enter Note"
                ></textarea>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NotesArea;
