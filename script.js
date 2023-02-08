"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  'Какие типы экранов нужно разработать? (пример: "Простые, Сложные, Интерактивные")'
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");

let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice <= 30000 && fullPrice > 15000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));

console.log(servicePercentPrice);
