import { Link } from "@umijs/max";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 mt-4 rounded-md bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link to="/">Program-Line Up</Link>
      </div>
      <ul className="flex space-x-4">
        <li className="nav-item">
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="hover:underline">Calendar</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="hover:underline">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
