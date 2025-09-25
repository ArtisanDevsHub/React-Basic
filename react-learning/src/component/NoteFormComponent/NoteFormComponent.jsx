import React, { useState } from "react";
import styles from "./noteFormStyles.module.css";
function NoteFormComponent() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);  

  
  const showNoteCreationForm = () =>{
        setShowForm(!showForm)
  }

  return (
    <div className={styles["create-note-container"]}>
      <button onClick={showNoteCreationForm} >Create New Note</button>
      <form className= { `${styles.noteForm} ${showForm? styles.showNoteForm : ""}` } action="">
        <input
          type="text"
          placeholder="Tittle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name=""
          id=""
          value={description}
          placeholder="Note Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className={styles.formButton}>
          <button type="submit">Add Note</button>
          <button type="submit">Cancel</button>
        </div>
      </form>

      <br />
      <br />
    </div>
  );
}

export default NoteFormComponent;
