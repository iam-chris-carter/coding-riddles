import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day5/input.txt').split("\n")
    let niceStringCounter = 0;

    const notAllowedStrs = ["ab", "cd", "pq", "xy"]

    for (const string of inputTextArr) {
        console.log(string)
        let hasVowelReq = false; // should be true to pass
        let hasTwoRepeatingLetterReq = false; // should be true to pass
        let hasDisallowedStrings = false; // should be false to pass
        const map = {};

        for (let i = 0; i < string.length; i++) {
            map[string[i]] ? map[string[i]]++ : map[string[i]] = 1;

            if (string[i + 1] === undefined) {
                break;
            }

            const firstChar = string[i]
            const secondChar = string[i + 1]

            if (firstChar === secondChar) {
                console.log("setting repeating letter requirement to true")
                hasTwoRepeatingLetterReq = true;
            }

            const twoCharSet = firstChar + secondChar;

            if (notAllowedStrs.includes(twoCharSet)) {
                console.log("setting has disallowed strings to true")
                hasDisallowedStrings = true;
            }
        }

        let vowelCounter = 0;
        map.hasOwnProperty("a") ? vowelCounter += map["a"] : null
        map.hasOwnProperty("e") ? vowelCounter += map["e"] : null
        map.hasOwnProperty("i") ? vowelCounter += map["i"] : null
        map.hasOwnProperty("o") ? vowelCounter += map["o"] : null
        map.hasOwnProperty("u") ? vowelCounter += map["u"] : null

        if (vowelCounter >= 3) {
            console.log("setting has vowel req to true")
            hasVowelReq = true
        }

        if (hasVowelReq && hasTwoRepeatingLetterReq && !hasDisallowedStrings) {
            niceStringCounter++
        }
    }
    console.log(niceStringCounter)
}

main();