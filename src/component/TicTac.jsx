import React, { useState } from 'react'
import styles from "./TicTac.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TicTac() {
    const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""])
    let num = ["", "", "", "", "", "", "", "", ""]
    const [numb, setNumb] = useState(0);
    const [won, setWon] = useState(false);
    const [scr1, setScr1] = useState(0);
    const [scr2, setScr2] = useState(0);
    const notify = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    function handleAgain(e) {
        e.preventDefault()
        setArr(["", "", "", "", "", "", "", "", ""])
        num = ["", "", "", "", "", "", "", "", ""]
        setWon(false);
        setNumb(0);
    }

    function handleBox(ind) {
        if (won === false) {
            num = arr;
            if ((numb) % 2 === 0 && num[ind] === "") {
                num[ind] = "O";
                setArr(num)
                setNumb(numb + 1);
            }
            else if ((numb) % 2 === 1 && num[ind] === "") {
                num[ind] = "X";
                setArr([...num])
                setNumb(numb + 1);
            }
            if (num[0] === num[1] && num[1] === num[2] && num[1] !== "") {
                if (num[1] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[1] === "X") {
                    alert("Player 2 Wins")
                    setWon(true)
                }
            }
            else if (num[0] === num[3] && num[3] === num[6] && num[3] !== "") {
                if (num[3] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[3] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else if (num[0] === num[4] && num[4] === num[8] && num[4] !== "") {
                if (num[4] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[4] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else if (num[2] === num[4] && num[4] === num[6] && num[4] !== "") {
                if (num[4] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[4] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else if (num[1] === num[4] && num[4] === num[7] && num[4] !== "") {
                if (num[4] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[4] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else if (num[3] === num[4] && num[4] === num[5] && num[4] !== "") {
                if (num[4] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[4] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else if (num[6] === num[7] && num[7] === num[8] && num[7] !== "") {
                if (num[7] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[7] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else if (num[2] === num[5] && num[5] === num[8] && num[5] !== "") {
                if (num[5] === "O") {
                    notify("Player 1 Wins")
                    setScr1(scr1 + 1)
                    setWon(true)
                }
                else if (num[5] === "X") {
                    notify("Player 2 Wins")
                    setScr2(scr2 + 1)
                    setWon(true)
                }
            }
            else {
                let bool = true;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === "") {
                        bool = false;
                    }
                }
                if (bool === true) {
                    notify("Game Draw")
                    setWon(true)
                }
            }
        }
    }
    return (
        <div className={styles.full}>
            <div className={styles.txt}>
                <div className={styles.player}><u>Player 1</u></div><br />
                <div>Will Play 'O'</div>
                <div className={styles.score}>{scr1}</div>
                <div className={styles.player}>score</div>
            </div>
            <div>
                <div className={styles.main}>
                    <div className={styles.bigBox}>
                        {arr.map((ele, ind) => <div className={styles.box} onClick={() => handleBox(ind)}>{ele}</div>)}
                    </div>
                    {won === false && (
                        <div className={styles.turn}>{numb % 2 == 0 ? <span>Player 1<sup>st</sup> Turn</span>: <span>Player 2<sup>nd</sup> Turn</span>}</div>
                    )}
                    {won && <div className={styles.again}><button onClick={handleAgain}>Play Again</button></div>}
                </div>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <div className={styles.txt}>
                <div className={styles.player}><u>Player 2</u></div><br />
                <div>Will Play 'X'</div>
                <div className={styles.score}>{scr2}</div>
                <div className={styles.player}>score</div>
            </div>
        </div>
    )
}
