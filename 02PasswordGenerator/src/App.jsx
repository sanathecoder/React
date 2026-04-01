import { useState, useCallback , useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //  useCallback Hooks 
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_{}[]`"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const CopyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
//  useEffect Hook 
  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator])

  // UseRef Hook 
  const passwordRef = useRef(null)


  return (
    <>
      <div className='w-full  max-w-md py-2 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-700'>
        <h1 className='text-lg text-center text-white'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden m-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 bg-white px-3 rounded-l-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button className='bg-blue-700 text-white px-4 py-2 rounded-r-lg hover:bg-blue-800 transition'
           onClick={CopyPasswordtoClipboard}>
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2 pb-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="">Length :  {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput"
              onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="charInput">Character</label>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
