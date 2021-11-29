import { Link } from "react-router-dom";
import logo from "./images/logo2.png"

export default function App() {
  return (
    <header>
        <Link to="/" className="title-link">
        <div>
      <img src={logo} alt="logo" />
        <h1>Board games reviews</h1>
        </div>
        </Link>
    </header>
  )
}