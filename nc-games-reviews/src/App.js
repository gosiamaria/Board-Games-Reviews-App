import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import SortBy from './Components/Reviews/SortBy';
import Reviews from './Components/Reviews/Reviews';
import Review from './Components/ReviewPage/Review';
import UserCorner from './Components/User/UserCorner';
import RequireLogin from './Components/Login/RequireLogin';
import UserPage from './Components/User/UserPage';
import ErrorPage from './Components/ErrorPage';
import { useState } from "react";

function App() {
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
        <SortBy setQuery={setQuery} /> 
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Reviews query={query} />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/categories/:slug" element={<Reviews query={query}/>} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
        </RequireLogin>
      </div>
  );
}

export default App;
