import { Link } from "react-router-dom";
import Navbuttons from "../components/Navbuttons";
import Header from "../components/Head";
export default function Landing() {
    return (
        <div>
            <Header />

            <div className="bg-white m-auto h-90 mt-25 rounded-4xl border-4 border-slate-900 w-100">
                <p className="pl-3 pt-7 text-center text-[30px] font-bold font-sans">
                    Welcome!
                </p>
                <p className="pl-3 pt-2 text-center pb-15 text-[20px] font-sans">
                    Create an account or Login
                </p>
                <div className="flex gap-3 items-center justify-center">
                    <Navbuttons name="Login" link="/Login" />
                    <Navbuttons name="Signup" link="/Signup" />
                </div>
            </div>
        </div>
    );
}
