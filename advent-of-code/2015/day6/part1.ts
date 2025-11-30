import {readFileContent} from "../../../tools/tools";


const main = () => {
    const inputTextArr = readFileContent('advent-of-code/2015/day6/input.txt').split("\n")

    const grid: boolean[][] = Array.from({ length: 1000 }, () => new Array(1000).fill(false));

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
                    grid[x][y] = true;
                } else if (command === "turn off") {
                    grid[x][y] = false;
                } else {
                    grid[x][y] = !grid[x][y];
                }
            }
        }
    }

    let litLightCount = 0

    for (let x = 0; x < 1000; x++) {
        for (let y = 0; y < 1000; y++) {
            if (grid[x][y]) {
                litLightCount++;
            }
        }
    }

    console.log(litLightCount)
}

// rangeEvaluator is no longer needed

main();
