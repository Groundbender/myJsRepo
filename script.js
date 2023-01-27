let title = "калькулятор";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 30;
let rollback = 10;
let fullPrice = 100;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(screenPrice + " долларов");
console.log(fullPrice + " долларов");

console.log(screens.toLowerCase().split(", "));

console.log(
  "Процент отката посреднику за работу: " + fullPrice * (rollback / 100)
);
