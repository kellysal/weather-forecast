import { Routes, Route } from "react-router-dom"
import Weather from "./components/Weather"
import { BrowserRouter } from "react-router-dom";
import Input from "./components/Input";

const App = () => {

  return (
    <div className="App text-black bg-white body-font m-5">
      <BrowserRouter>
        <Input />
        <Routes>
          <Route path="weather/:weatherId" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;