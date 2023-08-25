import React from 'react'
import c from './1с.webp'
import html from './html.webp'
import css from './css.webp'
import react_router_dom from './react-router-dom.webp'
import github from './github.webp'
import js from './js.webp'
import figma from './figma.webp'
import './Skills.css'

export default function Skills() {
  return (
    <>
    <h1 className='h1'>My skills</h1>
    <ul className='list'>
    <li className='list_item'>
       <img src={js} alt='JavaScript'/>
       <h4>JavaScript</h4>
     </li>
    <li className='list_item'>
       <img src={html} alt ='Html'/>
       <h4>Html</h4>
     </li>
    <li className='list_item'>
       <img src={css} alt ='css'/>
       <h4>css</h4>
     </li>
    <li className='list_item'>
       <img src={c} alt ='1C'/>
       <h4>1C</h4>
     </li>
     </ul>
     <ul className='new_list'>
   <li className='new_list_item'>
       <img src={figma} alt ='Figma'/>
       <h4>Figma</h4>
     </li>
    <li className='new_list_item'>
       <img src={react_router_dom} alt ='React-router-dom'/>
       <h4>React-router-dom</h4>
     </li>
    <li className='new_list_item'>
       <img src={github} alt ='Github'/>
       <h4>Github</h4>
     </li>
     </ul>
    </>
  )
}
