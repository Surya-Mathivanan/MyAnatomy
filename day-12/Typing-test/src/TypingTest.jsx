import React,{useRef,useEffect,useState} from 'react'



const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, tenetur",
    "surya",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, tenetur",
    ];

function TypingTest() {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const [timer,setTimer] =useState(0); 
    const [started, setStarted] = useState(false);
    const intervalRef = useRef(null);


    useEffect(() => {
        if (started) {
            intervalRef.current = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [started]);

    useEffect(() => {
        // Stop timer if input matches paragraph
        if (input === paragraphs[0]) {
            clearInterval(intervalRef.current);
            setStarted(false);
        }
    }, [input]);



    const handleInput = (e) => {
        const value = e.target.value;
        setInput(value);

        if (!started && value.length > 0) setStarted(true);

        let correct = 0;
        const paragraphText = paragraphs[0];
        for (let i = 0; i < value.length; i++) {
            if (value[i] === paragraphText[i]) correct++;
        }
    }


    const [placeholder, setPlaceholder] = useState('');
    const text = "Let's Start Typing...";

    useEffect(() => {
        let index = 0;

        const typeEffect = () => {
        if (index <= text.length) {
            setPlaceholder(text.slice(0, index));
            index++;
            setTimeout(typeEffect, 70);
        }
        };

        typeEffect();
    }, []);

  return (
    <>
    <h1 id='heading'>Typing Test💻</h1>
    <p id='texts-content'>
    {paragraphs[2].split('').map((char, i) => {
        let className = "";
        if (input[i] === undefined) className = "";
        else if (input[i] === char) className = "correct";
        else className = "incorrect";
        return (
        <span key={i} className={className}>{char}</span>
        );
    })}
    </p>
    <textarea id='text-area'  placeholder={placeholder} value={input} onChange={handleInput}ref={inputRef}></textarea>   
    <div id='left-cor'>
        <p>Time:<span id='timer' >{timer}s</span> </p>
        <p>Speed: </p>
       
    </div>
    <div id='right-cor'>
        <p>Accuracy:  </p>
        <button id='reset-btn'  > Restart</button>
    </div>
    
    </>
    
  )
}

export default TypingTest