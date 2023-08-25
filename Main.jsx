import React from 'react'
import './Main.css'
import  Hero from './Hero.jpg'

export default function Main() {
  return (
  <>
    <div className='hero'>
        <img src= {Hero} alt='pictire'/>
    <div className='hero_title'> Vera Ovcharova</div>
    <div className='hero_descr'> I am frotend developer</div>
    <div className='hero_lang'>Ru|Eng</div>
    </div>
    </>
  )
}
