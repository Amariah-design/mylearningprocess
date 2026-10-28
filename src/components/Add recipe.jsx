import Header from "./Header";
import Forminput from "./Forminput";

export default function Add() {
    return (
        <div>
            <Header />
            <form className=" bg-white w-150 m-auto mt-10 mb-4 px-5 py-4 rounded-4xl">
                <fieldset className="border-2 border-purple-600 my-3 px-11 py-7 rounded-3xl">
                    <legend>ADD RECIPE</legend>
                    <label
                        htmlFor="name"
                        className="text-[20px] mx-6 my-4 text-purple-700"
                    >
                        Recipe Name
                    </label>
                    <Forminput />
                    <label
                        htmlFor="name"
                        className="text-[20px] mx-6 my-4 text-purple-700"
                    >
                        Details
                    </label>
                    <Forminput />
                    <label
                        htmlFor="name"
                        className="text-[20px] mx-6 my-4 text-purple-700"
                    >
                        Ingredients
                    </label>
                    <Forminput />
                    <label
                        htmlFor="name"
                        className="text-[20px] mx-6 my-4 text-purple-700"
                    >
                        Difficulty
                    </label>
                    <Forminput />
                </fieldset>
            </form>
        </div>
    );
}
