/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from 'react'

const ColorPicer = () => {
    const [color, setColor] = useState('#ffffff')

    const handelChangeColor = (e) => {
        setColor(e.target.value)
        localStorage.setItem('color', e.target.value)
    }

    useEffect(() => {
        const result = localStorage.getItem('color')
        if(result){
            setColor(result)
        }
    }, [])

    return (
        <div className='w-100 h-120  flex flex-col justify-center items-center gap-5 bg-white/60 backdrop-blur-md shadow-4xl rounded-[10px] '>
            <h1 className={`text-2xl font-bold bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent opacity-60`}>Color Picker</h1>
            <div style={{ backgroundColor: color }} className='w-60 h-60 rounded-2xl shadow-2xl'>

            </div>
            <p className='font-semibold text-2xl'><span className='bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent opacity-60'>Pick Color</span> : <span style={{color:color}}>{color}</span></p>
            <input type="color" value={color} className='w-25 h-12 cursor-pointer shadow-4xl border-none outline-none' onChange={handelChangeColor} />
        </div>
    )
}

export default ColorPicer