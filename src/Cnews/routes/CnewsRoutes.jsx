import {  Route, Routes } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Categories } from "../Pages/Categories"
import { HomePage } from "../Pages/HomePage"


export const CnewsRoutes = () => {
  return (
    <>
   <Header/>
    <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/general" element= {<Categories cat='general'/>}/>
        <Route path="/business" element= {<Categories cat='business'/>}/>
        <Route path="/entertainmet" element= {<Categories cat='entertainmet'/>}/>
        <Route path="/health" element= {<Categories cat='health'/>}/>
        <Route path="/science" element= {<Categories cat='science'/>}/>
        <Route path="/sports" element= {<Categories cat='sports'/>}/>
        <Route path="/technology" element= {<Categories cat='technology'/>}/>
    </Routes>
    
    </> 
  )
}
