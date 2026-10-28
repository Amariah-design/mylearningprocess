import { useParams } from "react-router-dom";
import Header from "./Header";
import { recipes } from "./recipelist";

export default function Recipedetails() {
    const { recipeslist } = useParams();
    const therecipe = recipes[recipeslist - 1];
    return (
        <div>
            <Header />
            <div className="ml-10 font-serif font-light text-2xl text-[maroon] mt-7">
                FOOD: {therecipe}
            </div>
        </div>
    );
}
