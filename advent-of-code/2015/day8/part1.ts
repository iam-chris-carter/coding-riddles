import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day8/input.txt').split("\n");
    console.time()
    let totalLength = 0;
    let totalStrLiteralChars = 0;
    for (const str of inputTextArr) {
        totalLength += str.length;
        for (let i = 1; i < str.length - 1; i++) {
            totalStrLiteralChars++;
            if (str[i + 1] === undefined) continue;


            if (str[i] === '\\') {
                const nextChar = str[i + 1];

                if (nextChar === '\\' || nextChar === '"') {
                    i++;
                } else if (nextChar === 'x') {
                    i += 3;
                }
            }
        }
    }
    console.timeEnd()
    console.log(totalLength, totalStrLiteralChars, totalLength - totalStrLiteralChars);
}

main()