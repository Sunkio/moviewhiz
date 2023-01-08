import Head from 'next/head';
import Footer from '../components/Footer';
import { useState } from 'react';

const Home = () => {
    const [userInput, setUserInput] = useState('');
    const [apiOutput, setApiOutput] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)

    const callGenerateEndpoint = async () => {
        setIsGenerating(true);

        console.log("Calling OpenAI...")
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
        });

        const data = await response.json();
        const { output } = data;
        console.log("OpenAI replied...", output.text)

        setApiOutput(`${output.text}`);
        setIsGenerating(false);
    }


  return (
    <div>
      <Head>
        <title>MovieWhiz</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1 className="neon-text">MovieWhiz</h1>
          </div>
          <div className="header-subtitle">
            <h2>Let AI Pick the Perfect Movie - Simply Input Your Prompt & Press "Generate"!</h2>
            <p>
                Simply enter your chosen theme, genre, actors and/or who you're gonna watch it with into the prompt
                 box and let MovieWhiz pick the perfect movie for you.
            </p>
            <p>
              If you don't have any specific preferences, don't worry - simply leave the prompt empty and MovieWhiz will
              select a movie that you're sure to love!
            </p>
          </div>
            <div className="prompt-container">
                <textarea
                    className="prompt-box"
                    placeholder="a rom-com with a deeper meaning that impresses my mother-in-law"
                    value={userInput}
                    onChange={(e) => {setUserInput(e.target.value)}}
                />
            </div>
            <div className="prompt-buttons ">
                <a className={isGenerating ? 'generate-button loading neon-box' : 'generate-button neon-box'} onClick={callGenerateEndpoint}>
                    <div className="generate">
                        {isGenerating ? <span className="loader"></span> : <p className="grow">Generate</p>}
                    </div>
                </a>
            </div>
            {apiOutput && (
                <div className="output">
                    <div className="output-header-container">
                        <div className="output-header">
                            <h2>Your Recommendation</h2>
                        </div>
                    </div>
                    <div className="output-content">
                        <p>{apiOutput}</p>
                    </div>
                </div>
            )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
