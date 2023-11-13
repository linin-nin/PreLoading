import { motion, useInView } from "framer-motion"
import { useRef } from 'react'

const slideUp = {

    initial: {
        // scale: 1.2,
        opacity: 0.1,
    },

    open: (i) => ({
        scale: 0.7,
        // y: -30 ,
        opacity: 1,
        transition: {
            duration: 0.4, 
            delay: 0.09 * i,
        }
    }),

    closed: {
        transition: {duration: 0.4}
    }

}


const Title = () => {
    const mytext = "StartUpNation"

  return (
    <div className="flex">
            {
                mytext.split("").map((word, index)=>{
                    return <motion.p 
                    id="Me"
                    variants={slideUp} 
                    initial='initial' 
                    animate="open" 
                    custom={index} 
                    key={index}
                    >
                        {word}
                    </motion.p>
                })
            }
    </div>
  )
}

export default Title