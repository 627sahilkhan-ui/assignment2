import { Link } from "react-router-dom";


const Navbar = ({ cartCount }) => {

  return (
    <nav className="navbar">

      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>

      <Link to="/cart">
        🛒 Cart ({cartCount})
      </Link>

      <Link to="/orders">
        Orders
      </Link>

    </nav>
  );
};


export default Navbar;