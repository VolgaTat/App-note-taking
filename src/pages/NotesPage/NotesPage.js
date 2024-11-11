import React from 'react'
import NotesList from './../../components/NotesList/NotesList';
import { useSelector } from 'react-redux';
import {getAllNotes} from "../../features/notes/noteSlice"

export default function NotesPage() {
  const notes = useSelector(getAllNotes)
  
  return (
     <NotesList notes = {notes}/>
  )
}
