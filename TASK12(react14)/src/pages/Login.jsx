import Header from "../components/Head";
import Input from "../components/Input";
import Formbuttons from "../components/Formbuttons";
import { useState } from "react";
import { useUsercontext } from "../components/Usercontext";
export default function Login() {
    const { store } = useUsercontext();
    const [homeusername, sethomeusername] = useState("");
    function changeusername() {
        alert("Login successful");
        store(homeusername);
    }

    return (
        <div>
            <Header />
            <form className=" bg-white w-150 m-auto mt-10 px-5 py-4 rounded-4xl">
                <fieldset className="border-2 border-gray-600 my-3 px-11 py-7 rounded-3xl">
                    <legend>Login</legend>
                    <label
                        htmlFor="Email"
                        className="text-[20px] font-sans mx-6 my-4 pl-30"
                    >
                        Email:
                    </label>
                    <Input
                        name="Email"
                        id="Email"
                        value={homeusername}
                        className="border-2 py-1 ml-30"
                        onChange={function (e) {
                            console.log(e.target.value);
                            sethomeusername(e.target.value);
                        }}
                        onKeyDown={function (e) {
                            if (e.key == "Enter") {
                                changeusername();
                                sethomeusername("");
                            }
                        }}
                    />
                    <label
                        htmlFor="password"
                        className="text-[20px] mx-6 my-4 pl-30 font-sans"
                    >
                        Password:
                    </label>
                    <Input name="password" id="password" />

                    <a href="./Forgot password">Forgot password?</a>
                    <br />
                    <br />
                    <Formbuttons
                        name="Login"
                        link="/Dashboard"
                        message="Logged in"
                        onClick={changeusername}
                    />
                </fieldset>
            </form>
        </div>
    );
}
