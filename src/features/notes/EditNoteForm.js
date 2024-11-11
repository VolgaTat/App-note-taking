import React, {useState} from 'react'
import "./Notes.scss";
import {useParams} from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import {getAllNotes} from "./noteSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editeNote } from './noteSlice';

export default function EditNoteForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotes);
  const tempNote = notes.filter( note => note.noteId === id) 


  const [formData, setFormData] = useState(tempNote[0])
  const [titleError, setTitleError] = useState(false)
  const [contentError, setContentError] = useState(false)
  const [canSave, setCanSave] = useState(true)

  const onFormDataChange = (event)=>{
    event.preventDefault();
    if(event.target.name === "noteTitle"){
      if(event.target.value.length === 0 ){
        setTitleError(true)
      } else {
        setTitleError(false);
        setCanSave(true)
      }
    }
    if(event.target.name === "noteContent"){
      if(event.target.value.length === 0 ){
        setContentError(true)
      } else {
        setContentError(false);
        setCanSave(true)
      }
    }
    setFormData(prevData =>{
      return {
        ...prevData,
        [event.target.name]: event.target.value,//вычисляемое свойство объекта
      }
    })
    
  }
   const onSaveNoteClicked = ()=>{
     toast("Загрузка начинается...")
    if(!titleError && !contentError){
      console.log(formData)
      dispatch(editeNote(formData));
      setFormData({noteTitle: "", noteContent: "",})

    }
   }
  return (
    <div>
      <section  className ='note-form-section' >
        <h2  className ='my-4 fs-16' >Добавьте новые заметки: </h2>

        <form  className ='note-form' >
          {/* noteTitle */}
          <div className ='form-element'>
            <label htmlFor='noteTitle' className ='form-label' >Заголовок</label>
            <input type= "text" id ="noteTitle" 
              name= 'noteTitle' placeholder='Кратко, но по существу...'
              className ='form-control' onChange={onFormDataChange}
              value = {formData.noteTitle}>
            </input>
            <span className ='form-error-text' >{
              titleError 
              ? "Заголовок отсутствует!"
              : ""
            }</span>
          </div>
          {/* noteContent */}
          <div className ='form-element'>
            <label htmlFor='noteContent' className ='form-label' >Описание заметки</label>
            <textarea id ="noteContent" rows = {10}
              name= 'noteContent' placeholder='А, здесь можно не стесняться...'
              className ='form-control' onChange={onFormDataChange}
              value = {formData.noteContent}>
            </textarea>
            <span className ='form-error-text' >{
              contentError 
              ? "Содержание отсутствует!"
              : ""
            }</span>
          </div>
        </form>
          <button type= "button" 
            className ='btn btn-default' onClick={onSaveNoteClicked} disabled={!canSave}>
            Сохранить
          </button>
          <ToastContainer/>
      </section>
    </div>
  )
    
}
