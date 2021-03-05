import Echo from 'laravel-echo'

// const Pusher = require('pusher-js')

window.Pusher = require('pusher-js')

const EchoClient = new Echo({
  broadcaster: 'pusher',
  key: 'scrapyard-ws',
  wsHost: process.env.REACT_APP_WEBSOCKET_HOST,
  wsPort: 6001,
  disableStats: true,
  forceTLS: false
});

// const EchoClient = new Echo({
//   broadcaster: 'pusher',
//   client: new Pusher(process.env.REACT_APP_WEBSOCKET_KEY, {
//     // wsHost: window.location.hostname,
//     wsHost: 'livecast-stream.test',
//     wsPort: 6001,
//     forceTLS: true,
//   })
// })

export default EchoClient
