import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Forgot from "./pages/Forgot password";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Reset from "./pages/Reset password";
import Signup from "./pages/Signup";
import User from "./components/Usercontext";

// import Home from "./pages/Home";
// import About from "./pages/Abouts";

// export default function App(){
//     return (
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/home" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//         </Routes>
//         </BrowserRouter>
//     )
// }

export default function App() {
    return (
        <User>
            <div className="bg-slate-800">
                {/* hello world */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/Landing" element={<Landing />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/Forgot password" element={<Forgot />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Reset password" element={<Reset />} />
                        <Route path="/Signup" element={<Signup />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </User>
    );
}
