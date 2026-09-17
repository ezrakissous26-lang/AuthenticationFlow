import { Link } from "react-router";

export default function Hedaer() {
  return (
    <header>
      <nav>
        <h2>AuthenticationFlow</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/users">Users</Link>
        </div>
      </nav>
    </header>
  );
}
