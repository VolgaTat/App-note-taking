import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid';
import { storeInLocalStorage, fetcGetLocalStorage } from "../../utils/helpers";
const initialState = {
  notes: fetcGetLocalStorage('notes'),
  error: null,
  count: 0,
}

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote(state,action){
      const {noteTitle, noteContent} = action.payload
      // console.log(noteTitle, noteContent)
      let noteId = uuid();
      let newPost = {noteId, noteTitle, noteContent};
      newPost.noteDate = new Date().toISOString()
      state.notes.push(newPost);
      storeInLocalStorage("notes", state.notes)
    },
    removeNote(state,action){
      const tempId = action.payload;
      const tempNotes = state.notes.filter(note =>note.noteId !== tempId) 
      state.notes = tempNotes;
      storeInLocalStorage('notes', tempNotes)
    },
    editeNote(state, action){
      const {noteId, noteTitle, noteContent} = action.payload;
      const tempNotes = state.notes.map(note =>{
        if(note.noteId === noteId){
          note.noteTitle = noteTitle;
          note.noteContent = noteContent;
          note.noteDate = new Date().toISOString()
        }
        return note;
      });
      state.notes = tempNotes;
      storeInLocalStorage('notes', tempNotes )
    },
    increaseCount(state, action){
      state.count = state.count + 1;
    }
  } 
})

export const {addNewNote, removeNote, editeNote, increaseCount} = noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes
export default noteSlice.reducer

