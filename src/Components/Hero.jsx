import React from 'react'
import './Hero.css'
import Button from './Button'
import image from '../assets/HeroPix.png'

const Hero = () => {
  return (
    <div className='main_Hero'>
      <section className='sub_Hero'>
        <div className='left_Hero'>
        <h2>Make healthy <br/> life with fresh <br/> grocery </h2>
       <Button name="Shop Now" className="shop"/>
        </div>
         <article className='right_Hero'>
            <img src={image} alt="Man" />
         </article>
      </section>
     
    </div>
  )
}

export default Hero
