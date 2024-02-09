import { useState } from 'react'
import logo from './assets/mattti.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useSound from 'use-sound';
import tillbombe from './assets/tillnwort.mp3'
import tilldanke from './assets/tilldanke.mp3'
import tillfortnite from './assets/fortnite.mp3'
import wargut from './assets/wargut.mp3'
import aufgehts from './assets/aufgehts.mp3'
import sahne from './assets/sahne.mp3'
import chance from './assets/chance.mp3'
import moing from './assets/moing.mp3'
import nein from './assets/nein.mp3'
import fakten from './assets/fakten.mp3'

function App() {
  const [count, setCount] = useState(0)
  const [play] = useSound(tillbombe);
  const [play2] = useSound(tilldanke);
  const [play3] = useSound(tillfortnite);
  const [play4] = useSound(wargut);
  const [play5] = useSound(aufgehts);
  const [play6] = useSound(sahne);
  const [play7] = useSound(chance);
  const [play8] = useSound(moing);
  const [play9] = useSound(nein);
  const [play10] = useSound(fakten);
  return (
    <div class='flex h-screen'>
      <h1 class='text-3xl  font-bricolagegrotesque absolute my-8 left-[50%] translate-x-[-50%] font-extrabold text-center'>TILL SOUNDBOARD 🤤</h1>
      <a href="https://media.discordapp.net/attachments/1193673326258819072/1205319183026364517/till.png?ex=65d7eff6&is=65c57af6&hm=dbf1170998a5b79f01de50b85a673d004025148e3eb04a1391184871f5090771&=&format=webp&quality=lossless&width=1744&height=1137"><img src={logo} class='fixed bottom-0 selector right-0 h-20 w-20 mx-8' alt='Mattti Logo' /></a>
        <div class='m-auto'>
          
          <div class="grid mt-16 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-3 sm:grid-cols-2 ">
            {SoundButton(play, "Du N*****")}
            {SoundButton(play2, "Ey, Danke!")}
            {SoundButton(play3, "Fortnite.")}
            {SoundButton(play4, "War gut.")}  
            {SoundButton(play5, "Auf gehts.")}
            {SoundButton(play6, "Sahne?!")}
            {SoundButton(play7, "Keine Chance!")}
            {SoundButton(play8, "Moing!")}
            {SoundButton(play9, "NEIN!!!")}
            <div onClick={play10} class='custom-box-shadow2 duration-400 h-40 w-40 m-10 active:translate-y-[10px] hover:translate-y-[3px] rounded-full select-none bg-gray-100  flex justify-center font-bricolagegrotesque font-semibold text-xl text-black items-center'>Facts</div>

          </div>
        </div>
    </div>
  )
}

export default App


function SoundButton(play, text) {
  return <div onClick={play} class='custom-box-shadow duration-400 h-40 w-40 m-10 active:translate-y-[10px] hover:translate-y-[3px] rounded-full select-none bg-red-600  flex justify-center font-bricolagegrotesque font-bold text-xl text-white items-center'>{text}</div>;
}

