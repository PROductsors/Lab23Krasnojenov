// ЗАВДАННЯ 1: Створення масиву
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("1. Початковий масив:", numbers);


//  ЗАВДАННЯ 2: forEach 
console.log("\n Завдання 2: Вивід через forEach ");
numbers.forEach((number) => {
  process.stdout.write(number + " "); 
 });
console.log(""); 


// ЗАВДАННЯ 3: map 
console.log("\n--- Завдання 3: Подвоєння через map ---");
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log("Подвоєний масив:", doubledNumbers);


// ЗАВДАННЯ 4: filter 
console.log("\n Завдання 4: Фільтрація чисел > 5 ");
const numbersGreaterThanFive = numbers.filter((number) => {
  return number > 5;
});
console.log("Числа більше 5:", numbersGreaterThanFive);


// ЗАВДАННЯ 5: reduce 
console.log("\n Завдання 5: Сума через reduce ");
const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0); 
console.log("Сума всіх чисел:", sum);


// ЗАВДАННЯ 6: some 
console.log("\n Завдання 6: Перевірка через some ");
const hasNumberGreaterThanEight = numbers.some((number) => {
  return number > 8;
});

if (hasNumberGreaterThanEight) {
  console.log("Так, у масиві є числа більше 8."); 
} else {
  console.log("Ні, чисел більше 8 немає.");
}