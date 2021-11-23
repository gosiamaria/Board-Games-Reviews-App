import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Nav from './Components/Nav';
import Reviews from './Components/Reviews';
import UserCorner from './Components/UserCorner';
import Category from "./Components/Category"
import { UserContext } from "./context/user";
import { useState } from "react";


function App() {
  const [currentUser, setCurrentUser] = useState([]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <UserCorner />
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories/:slug" element={<Category />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
