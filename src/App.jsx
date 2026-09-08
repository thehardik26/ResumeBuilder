import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import PageNotFound from "./components/PageNotFound";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TemplateCard from "./components/TemplateCard";
import Editor from "./pages/Editor";




function App() {

  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/" element={<DashBoard/>}></Route>
      <Route path="/Navbar" element={<Navbar/>}></Route>
      <Route path="/Sidebar" element={<Sidebar/>}></Route>
      <Route path="/TemplateCard" element={<TemplateCard/>}></Route>
      <Route path="/editor/:templateId" element={<Editor />}/>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
