import Header from "../components/Head";

export default function Profile() {
    const { username } = useUsercontext();

    return (
        <div>
            <Header />
            <h1>Hello {username} Welcome on board</h1>
        </div>
    );
}
