import Header from "./components/Header"
import Footer from "./components/Footer"
import { AllRoutes } from "./routes/AllRoutes"
// import MovieList from "./pages/MovieList";

const App = () => {
  return (
    <>
     <Header/>
     <AllRoutes/>
     <Footer/>
    </>
  )
}

export default App