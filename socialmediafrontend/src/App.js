import HomePage from "./pages/home/HomePage";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MyProfile from "./pages/MyProfile/MyProfile";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Link
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "./ContextApi/Context";
import { ConstructionOutlined } from "@mui/icons-material";

const App = () => {

  const {user} = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route path='/'  element={user ? <HomePage/> : <Register/> }></Route>
        <Route path='/register' element={user ? <Navigate to='/' /> : <Register/>}></Route>
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login/>}></Route>
        <Route path='/MyProfile/:username' element={user? <MyProfile/> : <Navigate to='/'/>}></Route>
        <Route path='*' element={<h1>Error 404! Page Not Found</h1>}/>
      </Routes>
    </Router>
    // <HomePage/>
  )
}

export default App;
