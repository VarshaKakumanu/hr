import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import MyForm from "./components/MyForm";
import View from "./components/View";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Iveond from "./pages/Iveond";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import LoginPage from "./pages/login/LoginPage";
import Webdev from "./pages/Course/Webdev";
import Rpa from "./pages/Course/Rpa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    
    <Router>
    <ToastContainer></ToastContainer>
      <SideBar>
      
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/iveond" element={<Iveond />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/Webdev" element={<Webdev />} />
          <Route path="/Rpa" element={<Rpa />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/data" element={<MyForm />} />
          <Route path="/View/:id" element={<View />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    </> );
}

export default App;
