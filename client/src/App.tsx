import { Route, Routes } from "react-router";
import Hedaer from "./components/Hedaer";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
    <Hedaer/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/users" element={<ProtectedRoute> <Users/> </ProtectedRoute>}/>
    </Routes>
    <Footer/>
    </>
  )
}