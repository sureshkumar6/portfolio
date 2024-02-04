import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Typewriter = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'MERN Stack Developer', 'Content Creator!'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
  return(
    <div>
        <h4>I'm a {' '}
        <span style={{fontWeight:'bold', color:"red"}}>{text}</span>
        <Cursor cursorColor='red' />  
        </h4>  
    </div>
  )
};

export default Typewriter;
