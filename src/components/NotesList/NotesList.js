import React from 'react';
import "./NotesList.scss"
import {ImCancelCircle} from "react-icons/im";
import {FiEdit} from "react-icons/fi";
import {parseISO, formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeNote } from '../../features/notes/noteSlice';


const NotesList = ({notes}) => {
  const dispatch = useDispatch()
  if(!notes || notes.length === 0){
    return (<div className ='not-found'>На данный момент заметки отсутствуют!!</div>)
  }
  return (
  <div className ='notes'>
    <h5 className ='fs-18 fw-18 text-uppercase notes-title' >
      Заметки
    </h5>
    <div className ='notes-list grid'>
      {
        notes.map(note =>{
          return (
            <div className ='notes-item' key ={note.noteId}>
              <div className ='notes-item-title'>
                {note.noteTitle.substring(0,80)+ "..."}
              </div>
              <div className ='notes-item-body'>
                {note.noteContent.substring(0,150)+ "..."}
              </div>
             <div className ='notes-item-date flex'>
                {formatDistanceToNow(parseISO(note.noteDate))}
                <div className ='notes-item-btns flex align-center justify-between'>
                  <div>
                    <button type = "button" className ='notes-item-btn'
                      onClick={()=> dispatch(removeNote(note.noteId))} >
                      <ImCancelCircle />
                    </button>
                    <Link to ={`/edit/${note.noteId}`} className ='notes-item-btn'>
                      <FiEdit />
                    </Link>
                  </div>
                  <div>
                    <Link to = {`/note/${note.noteId}`} className ='read-more-btn fs-14 px-4'>
                       Читать всю заметку
                    </Link>
                  </div>
                </div>
             </div>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default NotesList
