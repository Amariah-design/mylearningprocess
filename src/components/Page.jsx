import { useEffect, useState } from "react";

export default function Page() {
    const [box1, setBox1] = useState("");
    const [box2, setBox2] = useState("");
    const [box3, setBox3] = useState("");
    const [box4, setBox4] = useState("");
    const [box5, setBox5] = useState("");
    const [box6, setBox6] = useState("");
    const [box7, setBox7] = useState("");
    const [box8, setBox8] = useState("");
    const [box9, setBox9] = useState("");
    const [player, setPlayer] = useState(1);

    function mark(boxnum) {
        if (boxnum == 1) {
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
        } else if (boxnum == 2) {
            if (box2 != "") {
                return;
            }
            if (player == 1) {
                setBox2("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox2("o");
                setPlayer(1);
            }
        } else if (boxnum == 3) {
            if (box3 != "") {
                return;
            }
            if (player == 1) {
                setBox3("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox3("o");
                setPlayer(1);
            }
        } else if (boxnum == 4) {
            if (box4 != "") {
                return;
            }
            if (player == 1) {
                setBox4("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox4("o");
                setPlayer(1);
            }
        } else if (boxnum == 5) {
            if (box5 != "") {
                return;
            }
            if (player == 1) {
                setBox5("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox5("o");
                setPlayer(1);
            }
        } else if (boxnum == 6) {
            if (box6 != "") {
                return;
            }
            if (player == 1) {
                setBox6("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox6("o");
                setPlayer(1);
            }
        } else if (boxnum == 7) {
            if (box7 != "") {
                return;
            }
            if (player == 1) {
                setBox7("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox7("o");
                setPlayer(1);
            }
        } else if (boxnum == 8) {
            if (box8 != "") {
                return;
            }
            if (player == 1) {
                setBox8("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox8("o");
                setPlayer(1);
            }
        } else if (boxnum == 9) {
            if (box9 != "") {
                return;
            }
            if (player == 1) {
                setBox9("x");
                setPlayer(2);
            } else if (player == 2) {
                setBox9("o");
                setPlayer(1);
            }
        } else if (box1 == "x") {
        }
    }

    useEffect(function () {
        if (box1 == "x" && box2 == "x" && box3 == "x") {
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        } else if (box1 == "o" && box2 == "o" && box3 == "o") {
            setTimeout(() => alert("Winner"), 0);
            ("winner");
        } else if (box4 == "x" && box5 == "x" && box6 == "x") {
            setTimeout(() => alert("Winner"), 0);
            ("winner");
        } else if (box7 == "x" && box8 == "x" && box9 == "x") {
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        } else if (box7 == "o" && box8 == "o" && box9 == "o") {
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        } else if (
            (box1 == "o" && box4 == "o" && box7 == "o") ||
            (box2 == "o" && box5 == "o" && box8 == "o") ||
            (box3 == "o" && box6 == "o" && box9 == "o")
        ) {
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        } else if (
            (box1 == "x" && box4 == "x" && box7 == "x") ||
            (box2 == "x" && box5 == "o" && box8 == "x") ||
            (box3 == "x" && box6 == "x" && box9 == "x")
        ) {
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        } else if (
            (box1 == "o" && box5 == "o" && box9 == "o") ||
            (box3 == "o" && box5 == "o" && box7 == "o")
        ) {
            [box9];
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        } else if (
            (box1 == "x" && box5 == "x" && box9 == "x") ||
            (box3 == "x" && box5 == "x" && box7 == "x")
        ) {
            setTimeout(() => alert("Winner"), 0);
            ("Winner");
        }
    });

    return (
        <div>
            <div className="grid grid-cols-3 mt-20 mx-125">
                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(1)}
                        className="w-full h-full text-5xl text-purple-800"
                    >
                        {box1}
                    </button>
                </div>
                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(2)}
                        className="w-full h-full text-5xl text-purple-800"
                    >
                        {box2}
                    </button>
                </div>
                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(3)}
                        className="w-full h-full text-5xl text-purple-800"
                    >
                        {box3}
                    </button>
                </div>
                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(4)}
                        className="w-full h-full  text-5xl text-purple-800"
                    >
                        {box4}
                    </button>
                </div>
                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(5)}
                        className="w-full h-full text-5xl text-purple-800"
                    >
                        {box5}
                    </button>
                </div>
                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(6)}
                        className="w-full h-full text-5xl text-purple-800"
                    >
                        {box6}
                    </button>
                </div>

                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(7)}
                        className="w-full h-full text-5xl text-purple-800"
                    >
                        {box7}
                    </button>
                </div>

                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(8)}
                        className="w-full h-full text-3xl text-purple-800"
                    >
                        {box8}
                    </button>
                </div>

                <div className=" border-2 border-purple-600 w-30 h-30">
                    <button
                        onClick={() => mark(9)}
                        className="w-full h-full text-3xl text-purple-800"
                    >
                        {box9}
                    </button>
                </div>
            </div>
        </div>
    );
}
