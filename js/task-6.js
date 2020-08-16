let input = 0;
let total = 0;
let result;

let firstResult = prompt ('Дай число', '');
firstResult = Number(firstResult);
if (firstResult) {
    do {
        result = prompt ('Дай число');
        input = Number(result);
        console.log(`input after plus ${input}`);
        total = total + input;
        console.log(`total after plus ${total}`);
    } while (result !== null)
} else {
    alert ('Не число!')
}
console.log(`total after all ${total}`);


