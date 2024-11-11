import React from 'react';
import {header_img, notes_icon } from "../../utils/images";
import './Sidebar.scss';
import {Link, useLocation, useParams} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {BsPlusLg} from "react-icons/bs"
import {MdNoteAlt} from "react-icons/md"
import {useSelector} from "react-redux"
import {getAllNotes} from "../../features/notes/noteSlice"

const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "")
  return (
    <div className ='app-sidebar' >
      <div className ='sidebar-content py-3 flex flex-column' >
         <Link to ='/' className ='app-brand flex align-center justify-center'>
            <img src = {notes_icon} alt = "notes_icon" />
         </Link>
          <ul  className ='links my-4' >
            {/* link home */}
            <Link to ='/home' className ={`text-white flex justify-center align-center link-item ${pathname === 'home' ? 'active-link': ''}`}>
              <span  className ='flex align-center justify-center' >
                <AiFillHome size={17} />
              </span>
              <span className ='icon-text' >Заметки</span>
            </Link>
            {/* link add */}
            <Link to ='/add' className ={`text-white flex justify-center align-center link-item ${pathname === 'add' ? 'active-link': ''}`}>
              <span  className ='flex align-center justify-center' >
                <BsPlusLg size={17} />
              </span>
              <span className ='icon-text' >Добавить заметку</span>
            </Link>
            
          </ul>
      </div>
    </div>
  )
    
}

export default Sidebar
