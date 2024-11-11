import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import {getAllNotes} from "../../features/notes/noteSlice"
import "./SingleNotePage.scss"

export default function SingleNotePage() {
  const {id} = useParams();
 const readMoreNote = useSelector(getAllNotes)
 const getReadMoreNote = readMoreNote.filter(note => note.noteId === id)
  return (
    <section className ="note-single-section px-4 grid" >
      <div>
          <h2 className ='note-single-title my-2 fs-20' >{getReadMoreNote[0].noteTitle}</h2>
          <span>{getReadMoreNote[0].noteDate}</span>
          <div className ='py-2'>
           <p>{getReadMoreNote[0].noteContent}</p>
          </div>
      </div>
    </section>
  )
}
