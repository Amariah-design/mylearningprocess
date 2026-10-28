import Header from "../components/Head";
import Input from "../components/Input";
export default function Forgot() {
    return (
        <div>
            <Header />
            <form className=" bg-white w-150 m-auto mt-10 px-5 py-4 rounded-4xl">
                <fieldset className="border-2 border-gray-600 my-3 px-11 py-7 rounded-3xl">
                    <legend></legend>
                    <label htmlFor="Email">Email</label>
                    <Input name="Email" id="Email" />
                    <a href="./Reset password">Reset password</a>
                </fieldset>
            </form>
        </div>
    );
}
