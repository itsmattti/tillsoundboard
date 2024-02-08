import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import useSound from 'use-sound';
import tillbombe from './assets/tillnwort.mp3'
import tilldanke from './assets/tilldanke.mp3'

function App() {
  const [count, setCount] = useState(0)
  const [play] = useSound(tillbombe);
  const [play2] = useSound(tilldanke);
  return (
    <div class='flex h-screen'>
        <div class='m-auto'>
          <grid>
            <div class='custom-box-shadow duration-400 h-40 w-40 rounded-full bg-red-600 shadow-xl hover:mt-[6px] hover:cursor-pointer active:mt-[20px]'></div>
          </grid>
        </div>
    </div>
  )
}

export default App


