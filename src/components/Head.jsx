import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const mywebpath = location.pathname;
  return (
    <ul className="flex gap-4 justify-center bg-slate-300 h-20 border-2 border-b-slate-900 rounded-2xl">
      <li className="mt-5 animate-pulse">
        <Link to="/Landing" className="text-[20px] ml-3">
          Home
        </Link>
        <Link to="/Signup" className="text-[20px]  ml-3">
          Signup
        </Link>
        <Link to="/Login" className="text-[20px] ml-3">
          Login
        </Link>

        {mywebpath == "/Login" && (
          <Link to="/Dashboard" className="text-[20px]  ml-3">
            Dashboard
          </Link>
        )}

        {mywebpath == "/Login" && (
          <Link to="/Landing" className="text-[20px]  ml-3">
            Logout
          </Link>
        )}

        {mywebpath == "/Dashboard" && (
          <Link to="/Landing" className="text-[20px] ml-3">
            Logout
          </Link>
        )}
      </li>
    </ul>
  );
}
