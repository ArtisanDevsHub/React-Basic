import { React, useState } from "react";
import styles from "./NoteListComponent.module.css";

function NoteListComponent({ notes, onDeleteNote, onUpdateNote }) {
  const [openRows, setOpenRows] = useState([]);

  const toggleExpandedRow = (index) => {
    if (openRows.includes(index)) {
      let newArr = openRows.filter((item) => item != index);
      setOpenRows(newArr);
      return;
    }
    setOpenRows([...openRows, index]);
  };

  function toggleIsCompleted(index, noteItem) {
    noteItem.isCompleted = !noteItem.isCompleted;
    onUpdateNote(index, noteItem);
  }

  return (
    <div>
      <h3>Note list</h3>
      {notes.length > 0 ? (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((item, index) => {
              return (
                  <tr key={index}>
                    <td
                      onClick={() => toggleIsCompleted(index, item)}
                      style={{ minWidth: "500px" }}
                      className={`text-left ${
                        item.isCompleted ? styles.strike : undefined
                      }`}
                    >
                      {item.title}
                      <div
                        className={`${styles.noteDetails} ${
                          openRows.includes(index) ? styles.expanded : ""
                        }`}
                      >
                        {item.body}
                      </div>
                    </td>

                    <td style={{ minWidth: "200px", display: "flex" }}>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        onClick={() => {
                          toggleExpandedRow(index);
                        }}
                      >
                        {openRows.includes(index) ? "Up" : "Down"}
                      </button>
                      
                      
                      <button type="button" className="btn btn-info btn-sm m-1">
                        Edit
                      </button>
                      
                      
                      <button
                        type="button"
                        id={`delete-btn-${index}`}
                        className="btn btn-danger btn-sm m-1"
                        onClick={() => onDeleteNote(index)}
                      >
                        Delete
                      </button>
                      
                    </td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Note notes available</p>
      )}
    </div>
  );
}

export default NoteListComponent;
