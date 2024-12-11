
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FeedbackProvider } from './context/FeedbackContext.jsx'

createRoot(document.getElementById('root')).render(
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
)
