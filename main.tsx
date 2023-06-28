import React from 'react'
import ReactDOM from 'react-dom/client'
import Ui from "./Appbar.tsx"

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Ui/>
  </React.StrictMode>,
)
