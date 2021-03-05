import logo from './logo.svg';
import './App.css';

import EchoClient from './Echo';

function App() {

  EchoClient.channel('chat').listen('MessageSent', e => {
    console.log(e)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Socket test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
