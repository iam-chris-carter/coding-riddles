import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputText = readFileContent('advent-of-code/2015/day3/input.txt');
    let santaHeightCoord = 0
    let santaWidthCoord = 0
    let roboHeightCoord = 0
    let roboWidthCoord = 0;
    const santaMap = {}
    const roboMap = {}

    santaMap[`${santaHeightCoord},${santaWidthCoord}`] = 1
    roboMap[`${roboHeightCoord},${roboWidthCoord}`] = 1

    let santasTurn = true;

    for (const char of inputText) {
        switch (char) {
            case "^":
                santasTurn ? santaHeightCoord++ : roboHeightCoord++
                break;
            case ">":
                santasTurn ? santaWidthCoord++ : roboWidthCoord++
                break;
            case "<":
                santasTurn ? santaWidthCoord-- : roboWidthCoord--
                break;
            case "v":
                santasTurn ? santaHeightCoord-- : roboHeightCoord--
                break;
            default:
        }

        if (santasTurn) {
            const position = `${santaHeightCoord},${santaWidthCoord}`
            santaMap[position] ? santaMap[position] ++ : santaMap[position] = 1
            santasTurn = false;
        } else {
            const position = `${roboHeightCoord},${roboWidthCoord}`
            roboMap[position] ? roboMap[position] ++ : roboMap[position] = 1
            santasTurn = true;
        }
    }
    for (const [key, value] of Object.entries(roboMap)) {
        santaMap[key] ? santaMap[key]++ : santaMap[key] = 1
    }
    console.log(Object.keys(santaMap).length)
}

main();