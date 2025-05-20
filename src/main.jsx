import React from "react"
import ReactDOM from "react-dom/client"
import { GiftExpertApp } from "./GifExpertApp"
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp/>
  </React.StrictMode>
)

// el strict mode es solo para desarrollo, en produccion es como si no estuviera
// dispara las peticiohnes 2 veces en strict mode
