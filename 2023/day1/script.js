console.clear()
const response = await fetch('https://adventofcode.com/2023/day/1/input')
const input = await response.text()
const lines = input.split('\n')
const numbers = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
};

let total = 0;
let leftNumber;
let rightNumber;
let leftIndex;
let rightIndex;

lines.forEach((line) => {
    if (line !== '' && line != undefined) {
        rightIndex = line.length;
        leftIndex = -1;
        for (const number in numbers) {
            if (line.indexOf(number) !== -1 && line.indexOf(number) < rightIndex) {
                rightNumber = numbers[number];
                rightIndex = line.indexOf(number);
            }
            if (line.lastIndexOf(number) !== -1 && line.lastIndexOf(number) > leftIndex) {
                leftNumber = numbers[number];
                leftIndex = line.lastIndexOf(number);
            }
        }
        let toAdd = rightNumber + leftNumber;
        total += parseInt(toAdd);
    }
});
console.log(total);
