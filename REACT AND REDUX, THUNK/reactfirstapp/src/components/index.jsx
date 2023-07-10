import React, { useState } from 'react'
import "./index.scss"

function Count() {

    let arraya = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+-', '0', '.']
    const [count, setCount] = useState("")
    // const [result, setResult] = useState('')
    const [array, setArray] = useState([])

    return (
        <div>
            {/* Count

            <div className="counter">
                <span className="counter__output"></span>
                <div className="btn__container">
                    <p>count= {count}</p>
                    <button onClick={() => {
                        return setCount(count + 1)
                    }}>İNC</button>
                    <button onClick={() => {
                        return setCount(count - 1)
                    }}>DEC</button>
                </div>
            </div> */}

            {/* <div className='calc'>
                <p>{count}</p>
                <p>{result}</p>
            </div>
            <div className="btns">
                <button onClick={() => {
                    return setCount(count + 1)
                }}>1</button>
                <button onClick={() => {
                    return setCount(count + 2)
                }}>2</button>
                <button onClick={() => {
                    return setCount(count + 3)
                }}>3</button>
                <button onClick={() => {
                    return setCount(count + "+")
                }}>+</button>
                <button onClick={() => {
                     setArray(count.split("+"))
                     let c = 0;
                     array.forEach(a=>{
                        c+= +a;
                     })
                     setresult(c)
                }}>=</button>
            </div> */}


            <div>
                <div className="screen">
                    <h3 id='count'>{count}</h3>
                </div>
                <div className="body">
                    <button onClick={() => {
                        setCount(+count * 0)
                    }}>C</button>
                    <button onClick={() => { setCount(count + '(') }}>(</button>
                    <button onClick={() => { setCount(count + ')') }}>)</button>
                    <button onClick={() => { setCount(count + '/') }}>/</button>
                    <span className="numbers">
                        {arraya.map((btn, index) => <button key={(index)} onClick={(e) => { setCount(count + e.target.innerText) }}>{btn}</button>)}
                    </span>
                    <button className='vurma' onClick={() => { setCount(count + 'x') }}>x</button>
                    <button className='cixma' onClick={() => { setCount(count + '-') }}>-</button>
                    <button className='toplama' onClick={() => {
                        { setCount(count + '+') }
                    }
                    }>+</button>
                    <button className='beraber' onClick={() => {
                        if (count.includes("+")) {
                            let a = 0;
                            setArray(count.split("+"))
                            array.forEach((element) => {
                                setCount(a += +element)
                                setArray(+a)
                            })
                        }
                        if (count.includes('x')) {
                            let hasil = 1;
                            setArray(count.split('x'))
                            array.forEach((e) => {
                                setCount(hasil *= +e)
                                setArray(+hasil)
                            })
                        }
                        if (count.includes('/')) {
                            let bolme = 1;
                            setArray(count.split('/'))
                            array.forEach((z) => {
                                setCount(count += z)
                                setArray(+bolme)
                            })
                        }
                        if (count.includes('-')) {
                            let cixma = 0;
                            setArray(count.split('-'))
                            array.forEach((z) => {
                                setCount(cixma -= +z)
                            })
                        }
                        // setCount(count + 0)
                    }}>=</button>
                </div>
            </div>

        </div >
    )
}

export default Count