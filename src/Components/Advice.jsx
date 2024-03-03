import React, { useEffect, useState } from 'react'

const Advice = () => {
    const [advice,setAdvice]= useState('all is well')
    const [count,setCount] =  useState(0)

    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        console.log(data)
        setAdvice(data.slip.advice)
        setCount((prevstate)=>prevstate+1)

    }
    useEffect(()=>{
        getAdvice()
    },[])
  return (
    <div className='text-white'>
        {/* <h1 className=''>Advice Getting Via Api</h1> */}
        <h2 className='text-md font-semibold py-5 mb-5 px-10'>{advice}</h2>
        <button className='px-5 py-2 text-sm font-semibold rounded-md border-white border'
          onClick={getAdvice}
        >
            Get Advice
        </button>
        <p className='py-5 text-md'>Today you read the total advice count is {count}</p>
    </div>
  )
}

export default Advice