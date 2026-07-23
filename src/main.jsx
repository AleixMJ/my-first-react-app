import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./Greeting.jsx";
import { Article1, Article2 } from '../Article.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <Article1 />
    <Article2 />
  </StrictMode>,
)
