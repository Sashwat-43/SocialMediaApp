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
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/MyProfile/:username' element={<MyProfile/>}></Route>
      </Routes>
    </Router>
    // <HomePage/>
  )
}

export default App;
