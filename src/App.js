import React, { useRef } from 'react';
import './App.css';
import cheese from './images/cheeseSmall.jpg';
const cloud = require('./cloudMaker.js');

function App() {
  const canvas = useRef();
  const img = useRef();
  
  const wordsToIgnore = ["is", "of", "a", "the", "and", "or", "to", "in", "on", "with", "it", "was", "got", "i"]

  const testString = "Love Song Baby Love Love Story Part-Time Lover Little Lovin' Greatest Love of All I Just Called to Say I Love You I Love You Always Forever The Power of Love That's The Way Love Goes Justify My Love Don't Let Go (Love) This Guy's In Love With You You You've Lost That Lovin' Feelin' Pretty One If You Want to Be Happy ABC This is How We Do It Jungle Boogie Signed Sealed Delivered I'm Yours Ob-La-Di Ob-La-Da Got To Give It Up Paper Planes Gimme Little Sign Upside Down Don't Stop 'Til You Get Enough September Respect Me Myself and I Bust a Move Groove Is in the Heart Holiday Please mr. Postman The Locomotion Tears of a Clown Ain't Too Proud to Beg Dancing in the Streets Thinking Out Loud Marry You All of Me Uptown Funk I Wanna Dance with Somebody Don't Stop Believin' Crazy in Love A Thousand Years I'm Yours Hey Ya";
  const testArray = testString.split(' ');

  const testMap = {};
  testArray.map(item => {
    const word = item.toLowerCase();
    if (wordsToIgnore.indexOf(word) === -1) {
      if (testMap[word]) {
        testMap[word]++;
      } else {
        testMap[word] = 1;
      }
    }
  });
  //console.log(testMap);
  const testMapToArray = Object.entries(testMap);
  const sortedTestMapToArray = testMapToArray.sort((a, b) => (a[1] > b[1] ? -1 : 1));
  console.log(sortedTestMapToArray);

  const words = sortedTestMapToArray.map(d => {

    return {text: d[0], size: d[1] * 10}
  })
  /*
  const words = testArray.map(d => {
    return {text: d, size: 10 + Math.random() * 90}
  })
  */
  /*
  const words = ["Hello", "Hello", "Hello", "Hello", "Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {
      console.log(d);
      return {text: d, size: 10 + Math.random() * 90};
    });
  */
  //console.log(words);

  const handleLoad = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillText('Say cheese', 50, 420);
    console.log(img);
    ctx.drawImage(img.current, 0, 0);

    cloud().size([640, 425])
    .canvas(canvas.current)
    .words(words)
    .padding(0.01) //5 //Look like this alters the width of the text
    //.rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("sans-serif") //.font("sans") //"Impact"
    .fontSize(function(d) { 
      //console.log(d.size);
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
