import { Route, Routes } from "react-router"
import "./styles/App.css"
import Home from "./pages/home"
import NotFound from "./pages/not-found"
import { Toaster } from "./components/ui/toaster"
function App() {

  return (
    <>
    <Toaster/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
