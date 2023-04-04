import React from 'react'

const Test = () => {
    const synth = window.speechSynthesis;

    // English (en-US)
    // Spanish (es-ES)
    // French (fr-FR)
    // German (de-DE)
    // Italian (it-IT)
    // Portuguese (pt-PT)
    // Russian (ru-RU)
    // Chinese (zh-CN)
    // Japanese (ja-JP)
    // Korean (ko-KR)
    // Arabic (ar-SA)
      function speakText(text) {
        const utterance = new SpeechSynthesisUtterance("نور شائطة");
        utterance.lang = 'ar-SA';
        synth.speak(utterance);
      }
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
    <button onClick={speakText}>Speak</button>
  </div>
    </header>
  </div>
  )
}

export default Test