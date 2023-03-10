import logo from "./logo.svg"
import "./App.css"
import { CustomNavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { Skills } from "./components/Skills"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Banner />
      <Skills />
    </div>
  )
}

export default App
