import React from "react";
import { Routes, Route } from "react-router-dom"
import BlogPage from "./pages/BlogPage";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";

export default function App(){


  return(
    <Routes>
      {/* outlet slash */}
        <Route path="/" element={ <Dashboard/> }>
            <Route index element={<h1>dashboard</h1> }/>
            <Route path="/users" element={<UserPage/> }/>
            <Route path="/blogs" element={<BlogPage/> }/>

        </Route>

    </Routes>
  )
}

// NOTE