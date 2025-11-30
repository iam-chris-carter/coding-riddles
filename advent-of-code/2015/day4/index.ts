import {generateMD5Hash} from "../../../tools/tools";


const main = () => {
    const input = "bgvyzdsv";
    let state = true;

    let counter = 0;

    while (state) {
        counter++
        const str = input + `${counter}`;
        const hash = generateMD5Hash(str);
        if (hash.startsWith("000000")) {
            console.log(counter)
            state = false;
        }
    }
}

main();