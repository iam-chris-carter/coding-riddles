import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day5/input.txt').split("\n")
    let niceStringCounter = 0;

    for (const string of inputTextArr) {
        console.log(string)
        const map = {};
        let hasRepeatingSet = false;
        let hasRepeatingSingle = false;

        for (let i = 0; i < string.length; i++) {
            if (string[i + 1] === undefined) {
                break;
            }

            const firstChar = string[i];
            const secondChar = string[i + 1];
            const twoCharSet = firstChar + secondChar;
            const splitString = string.slice(i + 2);

            if (splitString.includes(twoCharSet)) {
                console.log("setting hasRepeatingSet to true")
                hasRepeatingSet = true;
            }

            if (string[i + 2] === undefined) {
                break;
            }

            const thirdChar = string[i + 2];
            if (firstChar === thirdChar) {
                hasRepeatingSingle = true;
            }
        }

        if (hasRepeatingSet && hasRepeatingSingle) {
            niceStringCounter++;
        }
    }
    console.log(niceStringCounter)
}

main();