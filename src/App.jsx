import Drinkspage from "./pages/Drinkspage"
import Fruvegpage from "./pages/Fruvegpage"
import Meatpage from "./pages/Meatpage"
import Snackpage from "./pages/snackpage"
import Cakepage from "./pages/cakepage"
import { ReactDOM } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Menupage from "./pages/Menupage"
import Homepage from "./pages/Homepage"


function App() {
   return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menupage/>}/>
      <Route path="cakes" element={<Cakepage/>}/>
      <Route path="drinks" element={<Drinkspage/>}/>
      <Route path="meat" element={<Meatpage/>}/>
      <Route path="snacks" element={<Snackpage/>}/>
      <Route path="fru&veg" element={<Fruvegpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
