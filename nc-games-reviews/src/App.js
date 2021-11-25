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
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [query, setQuery] = useState({
    sort: 'created_at',
    order: 'desc',
    limit: 10,
    p: 1,
  })
  return (
      <div className="App">
        <RequireLogin>
        <Header />
        <UserCorner />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews setReviews={setReviews} reviews={reviews} setQuery={setQuery} query={query}/>} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/categories/:slug" element={<Category setReviews={setReviews} reviews={reviews} setQuery={setQuery} query={query}/>} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
        </RequireLogin>
      </div>
  );
}

export default App;
