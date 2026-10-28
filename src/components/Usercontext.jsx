import { createContext, useContext, useEffect, useState } from "react";
const Usercontext = createContext();
export default function User({ children }) {
    const [username, setusername] = useState("");
    function store(name) {
        setusername(name);
        localStorage.setItem("username", username);
    }

    useEffect(function () {
        const info = localStorage.getItem("username");
        if (info == null) {
            return;
        }
        setusername(info);
    }, []);
    return (
        <Usercontext.Provider value={{ username, store }}>
            {children}
        </Usercontext.Provider>
    );
}

export function useUsercontext() {
    const data = useContext(Usercontext);
    return data;
}
