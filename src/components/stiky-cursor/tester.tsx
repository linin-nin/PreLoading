import { motion } from "framer-motion"

const anima = {
  start: {
    y: -100,
    // transition: {
    //   duration: 0.5
    // }
  },
  end: {
    y: 0,
    transition: {
      duration: 0.5,
      repeat: 5
    }
  }
}

const Tester = () => {
  return (
    <div className="h-[100vh] w-[100%] bg-white flex justify-center items-center">
        <motion.div 
        variants={anima}
        initial ="start"
        animate = "end"
        // transition={{repeat: 5}}
        className=" bg-red-600 rounded-full w-11 h-9 p-10">
            <p className="text-white absolute">Hi</p>
        </motion.div>
    </div>
  )
}

export default Tester