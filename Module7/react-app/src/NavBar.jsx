import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#222", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>
        Home
      </Link>
      <Link to="/login" style={{ margin: "0 10px", color: "white" }}>
        Login
      </Link>
      <Link to="/bitcoin" style={{ margin: "0 10px", color: "white" }}>
        Bitcoin Rates
      </Link>
    </nav>
  );
}

export default Nav;
