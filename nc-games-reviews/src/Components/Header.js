import { Link } from "react-router-dom";
import logo from "./images/logo.png"

export default function App() {
  return (
    <header>
        <Link to="/" className="title-link">
        <div>
      <img src={logo} alt="logo" />
        <h1>BOARD GAMES REVIEWS</h1>
        </div>
        </Link>
    </header>
  )
}