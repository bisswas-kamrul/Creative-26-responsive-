import {  Routes, Route } from "react-router";
import './App.css'
import Rootlayout from "./Rootlayout";
import Home from "./Components/Pages/Home";

function App() {
 

  return (
    <>
  <Routes>
  <Route path="/" element={<Rootlayout />}>
    <Route path="/" index element={<Home />} />
   
  </Route>
</Routes>

    </>
  )
}

export default App
