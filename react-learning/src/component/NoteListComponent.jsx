import React from 'react'
import noteData from '../data/noteData.js'

function NoteListComponent() {

  const deleteNote = (evnt) =>{
    
    //delete-btn-0
    let idIndex  = Number(evnt.target.id.slice(11))
    
    noteData.splice(idIndex,1);
    console.log(noteData.length);
  }

  return (
    <div>
      <h3>Note list</h3>
      {
              <table className="table">
                <thead className="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">$</th>
                </tr>
                </thead>
                <tbody>
                {
                  noteData.map((item, index)=>{
                    return  <tr key={index}>
                        <td>{item.title}</td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm m-1" >View</button>
                          <button type="button" className="btn btn-info btn-sm m-1">Edit</button>
                          <button 
                            type="button"
                            id={`delete-btn-${index}`}
                            className="btn btn-danger btn-sm m-1"
                            onClick={deleteNote}
                            >Delete</button>
                        </td>
                      </tr>
                  })
                }
                </tbody>
              </table>            
      }
    </div>
  )
}

export default NoteListComponent