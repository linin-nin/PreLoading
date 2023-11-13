import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Second = () => {
    gsap.registerPlugin(DrawSVGPlugin) 
  return (
    <div className="item">Second</div>
  )
}

export default Second