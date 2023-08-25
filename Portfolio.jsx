import React from 'react'
import site from './site.png'
import s from './site0.png'
import registre from './registre1.png'
import registr from './registre2.png'
import regist from './registre0.png'
export default function Portfolio() {
  return (
    <>
    <h1> My portfolio</h1>
    <div className='block_one'>
      <div className='pictr_1'><img src= {site}/></div>
      <div className='pictr_2'><img src={s}/></div>
      </div>
      <div className='block_two'>
      <div className='pictr_3'><img src={registre}/></div>
      <div className='pictr_4'><img src={registr}/></div>
      <div className='pictr_5'><img src={regist}/></div>
    </div>
    <div className='block_three'>
    <a href= 'https://disk.yandex.ru/d/jYiwcPGcfCWgLw'>protects for react (src)</a>
    </div>
    </>
  )
}
