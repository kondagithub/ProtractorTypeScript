
let flag: boolean = true;
let total: number = 0;
let ename: string = 'ABC'

let sentense: string = `My name is ${ename}`;

console.log(sentense);

let list1: number[] = [1, 2, 3, 4];

let list2: Array<number> = [1, 2, 3];

let mixedtype:[string, number] = ['ASDFG', 10];

enum Color {Red, Green, Blue};

let c : Color = Color.Red;

console.log(c);

let randomValue: any = 10;

randomValue = true;

randomValue = 'GHT';