
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FeedbackProvider } from './context/FeedbackContext.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </ThemeProvider>
)
