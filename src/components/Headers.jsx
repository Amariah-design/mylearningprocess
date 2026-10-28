import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    const mywebpath = location.pathname;

    return (
     <ul className="flex gap-4 justify-center">
          <li>
            <Link to="/" className={`${(mywebpath == '/home' || mywebpath=='/') ? 'text-blue-400' : ''} `}> Home
            </Link> 
          </li>
          <li>
            <Link to="/about" className={`${mywebpath == '/about' ? 'text-blue-400' : ''}`}>About</Link>
          </li>
          <li>
            {(mywebpath == '/about') && (<button>Login</button>)}
          </li>
     </ul>
    )
}