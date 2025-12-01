import {readFileContent} from "../../../tools/tools";

// broke this refactoring it and cant be bothered to fix it

const main = () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day8/input.txt').split("\n");
    console.time()
    let totalStrLiteralChars = 0;
    let totalNewStrLength = 0;
    for (const str of inputTextArr) {
        let newStr = `"`;
        for (let i = 0; i < str.length; i++) {
            totalStrLiteralChars++;

            if (str[i] === `"`) {
                newStr += `\\"`
            } else {
                newStr += str[i];
            }
        }
        newStr += `"`
        totalNewStrLength += newStr.length;
    }
    console.timeEnd()
    // console.log(totalLength, totalStrLiteralChars, totalLength - totalStrLiteralChars);
}

main()