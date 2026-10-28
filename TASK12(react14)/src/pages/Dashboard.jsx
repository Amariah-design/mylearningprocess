import Header from "../components/Head";
import { useUsercontext } from "../components/Usercontext";

export default function Dashboard() {
    const { username } = useUsercontext();
    const data = useUsercontext();
    console.log(data);
    return (
        <div>
            <Header />
            <h1 className="text-7xl text-white ml-10 mt-30 font-bold font-mono animate-bounce">
                Welcome on Board! {username}
            </h1>
        </div>
    );
}
