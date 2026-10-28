import Header from "../components/Head";
import Formbuttons from "../components/Formbuttons";
import Input from "../components/Input";
export default function Signup() {
    return (
        <div>
            <Header />
            <form className=" bg-white w-150 m-auto mt-10 mb-4 px-5 py-4 rounded-4xl">
                <fieldset className="border-2 border-gray-600 my-3 px-11 py-7 rounded-3xl">
                    <legend>Signup</legend>
                    <label htmlFor="Email" className="text-[20px] mx-6 my-4">
                        Email:
                    </label>
                    <Input name="Email" id="Email" />
                    <label htmlFor="Name" className="text-[20px] mx-6 my-4">
                        Full Name:
                    </label>
                    <Input name="Name" id="Name" />
                    <label htmlFor="password" className="text-[20px] mx-6 my-4">
                        Password:
                    </label>
                    <Input name="password" id="password" />
                    <label
                        htmlFor="password1"
                        className="text-[20px] mx-6 my-4"
                    >
                        Confirm Password:
                    </label>
                    <Input name="password1" id="password1" />
                    <br />

                    <Formbuttons
                        name="Signup"
                        link="/Login"
                        message="Signed in return to Login"
                    />
                </fieldset>
            </form>
        </div>
    );
}
