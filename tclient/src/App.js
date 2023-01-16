import './App.css';
import FrontPage from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import User from './Components/User/User';
import AddUser from './Components/AddUser/AddUser';
import AddProfile from './Components/AddProfile/AddProfile';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/home" element={<FrontPage />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-profile" element={<AddProfile />} />
        <Route index element={<FrontPage />} />
      </Routes>
      </>
  );
}

export default App;
