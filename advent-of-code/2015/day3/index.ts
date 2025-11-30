import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputText = readFileContent('advent-of-code/2015/day3/input.txt');
    let h = 0
    let w = 0
    const map = {}

    for (const char of inputText) {
        switch (char) {
            case "^":
                h++;
                break;
            case ">":
                w++;
                break;
            case "<":
                w--;
                break;
            case "v":
                h--;
                break;
            default:
        }
        const position = `${h},${w}`
        map[position] ? map[position] ++ : map[position] = 1
    }
    let overOne = 0;
    for (const [key, value] of Object.entries(map)) {
        const strValue = value as string;
        parseInt(strValue) > 1 ? overOne ++ : null;
    }
    console.log(Object.keys(map).length + 1) //account for 0,0
    console.log(overOne)
}

main();