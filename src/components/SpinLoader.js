import { useEffect, useState } from "react"
import React from 'react'
import spinner from './images/spin.svg'

function SpinLoader(props) {
    const[text, setText]= useState('')
    const[showing, setShowing] = useState(true)
    useEffect(()=> {
        setTimeout(()=>{
            setShowing(false)
        },2100)
    }, [])
  return (
    <>
    <div className="flex justify-center min-h-full min-w-full mt-16">{
        showing ? (
            <div className="flex justify-center  min-h-full min-w-full spinner"><img src={spinner} alt="just there :)" className=" h-16 w-16  " /></div>
        ) :(
            <h2>{text}</h2>
        )
    }</div>
    </>
  )
}

export default SpinLoader