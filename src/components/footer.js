import React from 'react'
import anarchy from '../assets/anarchy.svg'
import {SiDevpost, SiGithub, SiLinkedin} from 'react-icons/si'

export default function Footer() {
  return (
    <div>
      <footer className="footer items-center p-4 bg-black text-neutral-content">
  <div className="items-center grid-flow-col">
    <img src={anarchy} className="h-8 bg-accent" alt="" />
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  {/* <a href="https://tinyurl.com/2w6a3cz3" target='_blank'><SiDevpost className="fill-accent" size={32}/></a>*/}
   <a href="https://github.com/kn-oz" target='_blank'><SiGithub className='fill-accent' size={32}/> </a> 
   <a href="https://linkedin.com/in/kn-oz" target='_blank'><SiLinkedin className='fill-accent' size={32}/> </a>
  </div>
</footer>
    </div>
  )
}
