import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoure";

function App() {

  return (
      <BrowserRouter>
        <div>
          <ToastContainer autoClose={2500} />
          <Routes>
            <Route path="/" element={<Login/>} />
             <Route path="" element={<PrivateRoute/>}>
             <Route path="/home" element={<Home/>} />
             </Route>
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
