import React from "react";
import Jokes from './Jokes.js'
import JokesData from "./JokesData.js";

function App() {
  const jokeElement = JokesData.map(joke =>{
    return <Jokes setup = {joke.setup} punchline = {joke.punchline} />
  })

  return (
    <div className="App">
      {jokeElement}
    </div>
  );
}

export default App;
