"use client"
import Landing from "@/components/Landing"
import Prelanding from "@/components/preloader"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
// import LocomotiveScroll from 'locomotive-scroll'
import Tester from "@/components/stiky-cursor/tester"

export default function Home() {
  const [islanding, setLanding] = useState(true)

 useEffect(()=>{
  (
    async () => {
      // const locomotiveScroll = new LocomotiveScroll();
      // setTimeout( () => {
      //   setLanding(false)
      //   document.body.style.cursor = "default"
      //   window.scrollTo(0,0)
      // }, 2500)
    }
  )()
 })

  return (
    <main className="h-[200vh] bg-white">
      <AnimatePresence>
        {islanding && <Prelanding/>}
      </AnimatePresence>
      <Landing/>
      {/* <Tester/> */}
    </main>
  )
}
