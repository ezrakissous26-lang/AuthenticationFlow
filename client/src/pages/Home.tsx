import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>AuthenticationFlow</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>

      <Link to="/users">
        <button>Users</button>
      </Link>
    </div>
  );
}