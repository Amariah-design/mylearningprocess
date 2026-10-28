import { Link } from "react-router-dom";
export default function Navbuttons({ name, link }) {
    return (
        <div>
            <Link
                to={link}
                className="bg-green-600 px-6 py-3 ml-3 border-2 rounded-[15px]"
            >
                {name}
            </Link>
        </div>
    );
}
