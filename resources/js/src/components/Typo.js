import React, { useEffect, useState } from "react";

const Typo = () => {
    const text = "word ovi word2 word3 word4";
    const wordArray = text.split(" ");
    const [input, setInput] = useState([""]);

    useEffect(() => {
        loop(input);
    }, [input]);

    const loop = (array) => {
        mainLoop: for (let index = 0; index < wordArray.length; ) {
            let correctWord = false;
            let eachWordArray = wordArray[index].split("");
            console.log(eachWordArray, "ewr");

            const innerLoop = (eachWordArray) => {
                innerLoop: for (
                    let index1 = 0;
                    index1 < eachWordArray.length;

                ) {
                    console.log(eachWordArray.length, "ewrlength");
                    console.log(index1, "index1");
                    if (index1 == eachWordArray.length - 1) {
                        correctWord = true;
                        setInput("");
                        break;
                    } else {
                        if (eachWordArray[index1] === array[index1]) {
                            // correct = true;
                            console.log("correct");
                            console.log(eachWordArray[index1], "actual");
                            console.log(array[index1], "input");
                            index1++;
                            continue;
                        } else {
                            console.log("no match");
                            break;
                        }
                    }
                }
            };
            innerLoop(eachWordArray);
            if (correctWord === true) {
                console.log(eachWordArray);
                index++;
                console.log(eachWordArray);
                innerLoop(eachWordArray);
            } else {
                break;
            }
            console.log(index, "index");
        }
    };

    // const loop = (array) => {
    //     if (array) {
    //         mainLoop: for (let index = 0; index < wordArray.length; ) {
    //             let count = 0;
    //             let eachWordArray = wordArray[index].split("");
    //             console.log(eachWordArray, "ewr");

    //             if (count === eachWordArray.length - 1) {
    //                 index++;
    //             } else {
    //                 eachWordArray.forEach((character, index) => {
    //                     if (character === array[index]) {
    //                         console.log("correct");
    //                         return count++;
    //                     } else {
    //                         console.log("incorrect");
    //                     }
    //                 });
    //             }
    //         }
    //     } else {
    //         console.log("no input");
    //     }
    // };

    // const loop = (array) => {
    //     if (array) {
    //         for (let index = 0; index < wordArray.length; index++) {
    //             let correctWord = false;
    //             console.log(index, "index");
    //             const eachWordArray = wordArray[index].split("");

    //             if (correctWord === true) {
    //                 index++;
    //                 console.log("index +");
    //             } else {
    //                 for (
    //                     let index1 = 0;
    //                     index1 < eachWordArray.length;
    //                     index1++
    //                 ) {
    //                     console.log(index1, "index1");
    //                     if (index1 === eachWordArray.length - 1) {
    //                         correctWord = true;
    //                         console.log("word complete");
    //                     }
    //                     if (eachWordArray[index1] === array[index1]) {
    //                         console.log("correct");
    //                     } else {
    //                         console.log("incorrect");
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        setInput(inputValue);
    };

    return (
        <div>
            <input type="input" value={input} onChange={handleInputChange} />
            <h4>Data : {input}</h4>
        </div>
    );
};

export default Typo;
