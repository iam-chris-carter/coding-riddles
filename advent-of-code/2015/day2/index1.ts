import {readFileContent} from "../../../tools/tools";


const main = async () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day2/input.txt').split("\n")
    let runningTotal = 0;
    for (const boxDimensions of inputTextArr) {
        const [l, w, h] = boxDimensions.split("x")
        const intl = parseInt(l);
        const intw = parseInt(w);
        const inth = parseInt(h);

        const lowestNum = [intl + intl, intw + intw, inth + inth].sort((a,b) => (a -b));
        const sum = lowestNum[0] + lowestNum[1] + inth*intw*intl;
        console.log(`l: ${intl}\nw: ${intw}\nh: ${inth}\nsum:${sum}`)
        runningTotal += sum;
    }
    console.log(runningTotal);
}

main();
