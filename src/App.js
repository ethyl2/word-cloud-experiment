import React, { useRef } from 'react';
import './App.css';
import cheese from './images/cheeseSmall.jpg';
const cloud = require('./cloudMaker.js');

function App() {
  const canvas = useRef();
  const img = useRef();

  const testString = "Thinking Out Loud Marry You All of Me Uptown Funk I Wanna Dance with Somebody Don't Stop Believin' Crazy in Love A Thousand Years I'm Yours Hey Ya";
  const testArray = testString.split(' ');
  const words = testArray.map(d => {
    return {text: d, size: 10 + Math.random() * 90}
  })
  /*
  const words = ["Hello", "Hello", "Hello", "Hello", "Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {
      console.log(d);
      return {text: d, size: 10 + Math.random() * 90};
    });
  */
  console.log(words);

  const handleLoad = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillText('Say cheese', 50, 420);
    console.log(img);
    ctx.drawImage(img.current, 0, 0);

    cloud().size([640, 425])
    .canvas(canvas.current)
    .words(words)
    .padding(0.01) //5
    //.rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("sans-serif") //.font("sans") //"Impact"
    .fontSize(function(d) { 
      console.log(d.size);
      return d.size; 
    }) 
    
    .on("end", end)
    .start();

    function end(words) { 
      console.log('end');
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Canvas Experiments</h1>
      </header>

      <div>
        <canvas ref={canvas} width={640} height={425}/>
        <img onLoad={handleLoad} ref={img} src={cheese} style={{display: 'none'}} alt='cheese'/>
      </div>


    </div>
  );
}

export default App;
