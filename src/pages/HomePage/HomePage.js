/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react'
import { Outlet } from 'react-router'
import './HomePage.scss'
import Sidebar from './../../components/Sidebar/Sidebar';

export default function HomePage() {
  const [greetText, setGreetText] = useState("");
  const currentDate = new Date();
  const weekday = currentDate.toLocaleDateString("default", {weekday: "long"});
  const month = currentDate.toLocaleString("default", {month: "long"});
  const year = currentDate.toLocaleString("default", {year: "numeric"});
  const date = `${weekday}, ${currentDate.getUTCDate()} 
    ${month.includes("март" || "август") ? month + "а": month.slice(0,-1) + "я"}, ${year} года`
  useEffect(()=>{
    let currentHours = currentDate.getHours();
    if(currentHours < 12 ) setGreetText("Доброе утро, друг!");
    else if(currentHours >= 18 ) setGreetText("Добрый вечер, друг !");
    else setGreetText("Добрый день, трудяга!");
  },[greetText])

  return (
    <div className='app flex'>
     <Sidebar />
     
     <div className='app-main'>
        <header className='header w-100 flex align-center'>
             <div className='container w-100'>
                <div className='header-content 
                flex align-center justify-between text-white py-3'>
                    <div className='greetings '>
                      <h3>{greetText}</h3>
                    </div>
                    <div className='date'>
                      <span className='text-uppercase fs-13 fw-4'>{date}</span>
                    </div>
                </div>
             </div>
        </header>
        <div className='notes-wrapper py-4 px-4'>
          <Outlet />
        </div>
        
     </div>
    </div>
  )
}
