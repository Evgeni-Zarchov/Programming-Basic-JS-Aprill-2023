function equalSum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let printLine = "";
    for (let i = startNum; i <= endNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let a = 0; a < currentNum.length; a++) {
            let currentDigit = Number(currentNum.charAt(a));
            if (a % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
equalSum(["100000", "100050"]);