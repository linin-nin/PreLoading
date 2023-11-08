import { animate } from 'framer-motion/dom'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect, useRef } from 'react'

const Landing = () => {

    const slider = useRef(null)
    const firstText = useRef(null)
    let direction = -1
    let percent = 0

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * (-1)
            },
            x: "-500px"
        })
        requestAnimationFrame(animate)
    },[])

    const animate = () => {
        if(percent<-100)
            percent = 0
        else if(percent>0)
            percent = -100
    }

  return (
    <div className='p-32'>
        <h1 className='flex items-center justify-center text-6xl text-red-900 mb-5'>Hello Hello Monday, well come new week</h1>
        <p className='flex items-center justify-center text-green-900'>When a component is removed, no longer a chance to update its props. So if a 
            exit prop is defined as a dynamic variant and you want to pass a new 
            custom prop, you can do so via AnimatePresence. This will ensure all leaving components animate using the latest data.
        </p>
    </div>
  )
}

export default Landing