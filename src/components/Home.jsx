import { useEffect, useState } from "react";
export default function Home() {
    let num = 1;
    const [num_ber, setNum_ber] = useState(1);
    const [box1, setBox1] = useState("");
    const [box2, setBox2] = useState("");
    const [player, setPlayer] = useState(1);

    function add() {
        setNum_ber(num_ber + 1);
    }

    function reduce() {
        setNum_ber(num_ber - 1);
    }

    useEffect(
        function () {
            if (num_ber == 5) {
                alert("hello world");
            }
        },
        [num_ber],
    );

    function marker(boxnumber) {
        if (boxnumber == 1) {
            if (box1 != "") {
                return;
            }

            if (player == 1) {
                setBox1("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox1("o");
                setPlayer(1);
            }
        } else if (boxnumber == 2) {
            if (box2 != "") {
                return;
            }
            if (player == 1) {
                setBox2("X");
                setPlayer(2);
            } else if (player == 2) {
                setBox2("o");
                setPlayer(1);
            }
        }
    }

    return (
        <div>
            <center>
                {num_ber}
                <br />
                <button onClick={add}>Add</button>
                <br />
                <button onClick={reduce}>Reduce</button>
            </center>

            <div className="flex text-2xl justify-center">
                <div className="border w-20 h-10">
                    <button
                        onClick={() => marker(1)}
                        className="w-full h-full flex justify-center items-center "
                    >
                        {box1}
                    </button>
                </div>

                <div className="border w-20 h-10">
                    <button
                        onClick={() => marker(2)}
                        className="w-full h-full flex justify-center items-center "
                    >
                        {box2}
                    </button>
                </div>
            </div>
        </div>
    );
}
