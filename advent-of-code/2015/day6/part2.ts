import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day6/input.txt').split("\n")
    let totalBrightness = 0;

    const grid: number[][] = Array.from({ length: 1000 }, () => new Array(1000).fill(0));

    for (const string of inputTextArr) {
        const match = string.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
        if (!match) continue;

        const command = match[1];
        const startX = parseInt(match[2]);
        const startY = parseInt(match[3]);
        const endX = parseInt(match[4]);
        const endY = parseInt(match[5]);

        for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
                if (command === "turn on") {
                    grid[x][y]++;
                    totalBrightness++;
                } else if (command === "turn off") {
                    grid[x][y] > 0 ? (grid[x][y]--, totalBrightness--) : null;
                } else {
                    grid[x][y] += 2;
                    totalBrightness += 2;
                }
            }
        }
    }

    console.log(totalBrightness)
}

// rangeEvaluator is no longer needed

main();
