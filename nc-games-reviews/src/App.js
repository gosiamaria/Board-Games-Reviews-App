import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Nav from './Components/Nav';
import Reviews from './Components/Reviews/Reviews';
import Review from './Components/ReviewPage/Review';
import UserCorner from './Components/User/UserCorner';
import RequireLogin from './Components/Login/RequireLogin';
import UserPage from './Components/User/UserPage';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
      <div className="App">
        <RequireLogin>
        <Header />
        <UserCorner />
        <Nav />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/categories/:slug" element={<Reviews />} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
        </RequireLogin>
      </div>
  );
}

export default App;
