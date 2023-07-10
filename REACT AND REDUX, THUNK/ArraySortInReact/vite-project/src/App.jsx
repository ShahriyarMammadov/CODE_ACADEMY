import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let array = [
    { id: 4, name: 'Dean', country: 'Denmark' },
    { id: 3, name: 'Carl', country: 'Canada' },
    { id: 2, name: 'Bob', country: 'Belgium' },
    { id: 1, name: 'Alice', country: 'Austria' },
    { id: 5, name: 'Ethan', country: 'Egypt' },
  ]
  console.log('Original Array: ', array)

  const numberSort = [...array].sort((a, b) => (a.id - b.id))
  console.log('Number sorted Array: ', numberSort)

  const strSort = [...array].sort((a, b) => (a.country > b.country ? 1 : -1))
  console.log('String Sorted Array: ', strSort)

  let numArr = [12, 1, 4, 5, 78, 5, 23, 6, 8, 8]
  const sortedNumArr = [...numArr].sort((a, b) => a - b)
  console.log(sortedNumArr)

  
  return (
    <div className="App">

    </div>
  )
}

export default App
