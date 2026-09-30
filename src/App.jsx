import AppRoutes from "./routes/AppRutes"
import { ThemeProvider } from "./context/ThemeContext"
import FloatingWhatsApp from "./components/common/FloatingWhatsApp"
import AIChatbot from "./components/common/AIChatbot"

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
      <FloatingWhatsApp />
      <AIChatbot />
    </ThemeProvider>
  )
}

export default App;