import React, { useRef } from 'react';
import './App.css';
import cheese from './images/cheeseSmall.jpg';

function App() {
  const canvas = useRef();
  const img = React.useRef();

  const handleLoad = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillText('Say cheese', 50, 420);
    console.log(img);
    ctx.drawImage(img.current, 0, 0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Canvas Experiments</h1>
      </header>

      <div>
        <canvas ref={canvas} width={640} height={425} />
        <img onLoad={handleLoad} ref={img} src={cheese} style={{display: 'none'}} alt='cheese'/>
      </div>


    </div>
  );
}

export default App;
