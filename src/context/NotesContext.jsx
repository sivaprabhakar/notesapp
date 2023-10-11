import React, { createContext, useState } from 'react';

export const NotesTaken = createContext();

function NotesContext({ children }) {
  const [data, setData] = useState([
    {
      title: "Feedbacks",
      note: "lorem Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
      updatedBefore: "10 days"
    },
  ]);

  return (
    <NotesTaken.Provider value={{ data, setData }}>
      {children}
    </NotesTaken.Provider>
  );
}

export default NotesContext;
