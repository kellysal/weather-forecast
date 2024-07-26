import { Routes, Route } from "react-router-dom"
import Weather from "./components/Weather"
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <div className="App text-black bg-white body-font m-5">
      <BrowserRouter>
        <Routes>
          <Route path="weather/:weatherId" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;