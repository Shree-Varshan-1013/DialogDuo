import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx';
import './styles/index.css'
import Home from './components/Home.jsx';

import ChatBot from './components/ChatBot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatBot/>
  </React.StrictMode>,
)
