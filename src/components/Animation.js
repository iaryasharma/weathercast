import { gsap } from "gsap"

// setTimeout()

const Animation = () =>{
    gsap.fromTo('.logo',{opacity:0, x:-30 }, {opacity: 1 , x: 0 , duration: 2 })
    return (
    <div className='logo'>Weather Cast<br></br></div>)
}
export default Animation