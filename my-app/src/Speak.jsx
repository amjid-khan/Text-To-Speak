import React, { useState } from 'react'

function Speak() {
    const [text , setText] = useState("")
    const handlespeak = () => {
        if (text.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
          }

    }
  return (
    <div className='container'>
     <textarea name=""  value={text} onChange={(e)=>setText(e.target.value)} id="" placeholder='Write some words'></textarea>
      <button onClick={handlespeak}>Speak</button>
    </div>
  )
}

export default Speak
