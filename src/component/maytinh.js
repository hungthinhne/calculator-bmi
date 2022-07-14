import React, { useState } from 'react'
import "./maytinh.css" 

const Maytinh = () => {
  
  const [kq, setKq] = useState("");

  const dau = ['*', '/', '+', '-' ]

  const capnhatkq = value => {
    if (
      dau.includes(value) && kq === ("") ||
      dau.includes(value) && dau.includes(kq.slice(-1))
    )
    {
      return;
    }

     setKq(kq + value)
  }

  const bangkq = () => {
    setKq(eval(kq).toString())
  }

  const handleClear1 = () => {
    setKq(kq.slice(0, kq.length - 1))
  }

  const handleClear = () => {
    setKq("")
  }

  return (
    <div className='container'>
       <div className="calc">
            <div className="divresul">
                <input className='resul' value={kq || 0} type="text" />
            </div>
            <div className="bot">
                <button onClick={handleClear} className='clear color-main'>Clear</button>
                <button onClick={handleClear1} className='color-main'>C</button>
                <button onClick={() => capnhatkq('/')} className='color-calc'>&divide;</button>
                <button onClick={() => capnhatkq('7')}>7</button>
                <button onClick={() => capnhatkq('8')}>8</button>
                <button onClick={() => capnhatkq('9')}>9</button>
                <button onClick={() => capnhatkq('*')} className='color-calc'>&times;</button>
                <button onClick={() => capnhatkq('4')}>4</button>
                <button onClick={() => capnhatkq('5')}>5</button>
                <button onClick={() => capnhatkq('6')}>6</button>
                <button onClick={() => capnhatkq('-')} className='color-calc'>&ndash;</button>
                <button onClick={() => capnhatkq('1')}>1</button>
                <button onClick={() => capnhatkq('2')}>2</button>
                <button onClick={() => capnhatkq('3')}>3</button>
                <button onClick={() => capnhatkq('+')} className='color-calc'>+</button>
                <button onClick={() => capnhatkq('0')}>0</button>
                <button onClick={() => capnhatkq('.')}>.</button>
                <button onClick={bangkq} className='eq color-calc'>=</button>
            </div>
       </div>
    </div>
  )
}

export default Maytinh;

