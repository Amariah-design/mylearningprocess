import { Link } from "react-router-dom";
export default function Formbuttons({ name, link, ...others }) {
    const message = name + " Successful";
    return (
        <div>
            <Link
                {...others}

                to={link}
                className="bg-slate-800 p-2.5 rounded-2xl border-2 text-white mt-7"
            >
                {name}
            </Link>
        </div>
    );
}
