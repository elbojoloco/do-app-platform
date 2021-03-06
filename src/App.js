import logo from './logo.svg';
import './App.css';

// import EchoClient from './Echo';

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'bojo-socket',
    wsHost: 'websocket.bojodev.io',
    wsPort: 6001,
    wssPort: 443,
    disableStats: true,
    forceTLS: true,
    enabledTransports: ['ws', 'wss'],
disabledTransports: ['sockjs', 'xhr_polling', 'xhr_streaming']
});

function App() {

  // EchoClient.channel('chat').listen('MessageSent', e => {
  //   console.log(e)
  // })

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
