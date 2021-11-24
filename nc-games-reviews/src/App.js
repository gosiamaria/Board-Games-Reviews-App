import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Nav from './Components/Nav';
import Reviews from './Components/Reviews';
import Review from './Components/Review';
import UserCorner from './Components/UserCorner';
import Category from "./Components/Category"
import RequireLogin from './Components/RequireLogin';
import UserPage from './Components/UserPage';


function App() {
  return (
      <div className="App">
        <RequireLogin>
        <Header />
        <UserCorner />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
        </RequireLogin>
      </div>
  );
}

export default App;
